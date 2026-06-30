// 用于解析 docs 的内容，生成运行时直接读取的静态产物。
import fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from 'marked';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const WEB_SRC_DIR = path.resolve(SCRIPT_DIR, '..');
const WEB_DIR = path.resolve(WEB_SRC_DIR, '..');
const ROOT_DIR = path.resolve(WEB_DIR, '..');

const README_PATH = path.join(ROOT_DIR, 'README.md');
const WEEKLY_DIR = path.join(ROOT_DIR, 'docs');
const GENERATE_ARTICLE_DIR = path.join(WEB_SRC_DIR, 'article/generate');

const MONTH_MAP = {
    一月: '1',
    二月: '2',
    三月: '3',
    四月: '4',
    五月: '5',
    六月: '6',
    七月: '7',
    八月: '8',
    九月: '9',
    十月: '10',
    十一月: '11',
    十二月: '12'
};

const readFile = filePath => fs.readFileSync(filePath, 'utf-8');

const saveFile = (filePath, data) => {
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
    fs.writeFileSync(filePath, data, 'utf-8');
};

const saveJsonFile = (filePath, data) => saveFile(filePath, `${JSON.stringify(data, null, 2)}\n`);

const compactText = text => String(text || '').replace(/\s+/g, ' ').trim();

const trimSummary = (text, maxLength = 120) => {
    const value = compactText(text);
    return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value;
};

const createSlug = (text, fallback) => {
    const slug = compactText(text)
        .toLowerCase()
        .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
        .replace(/^-+|-+$/g, '');

    return slug || fallback;
};

const createUniqueId = (base, usedIds) => {
    const current = usedIds.get(base) || 0;
    usedIds.set(base, current + 1);
    return current === 0 ? base : `${base}-${current + 1}`;
};

const cleanGeneratedFiles = () => {
    fs.mkdirSync(GENERATE_ARTICLE_DIR, {recursive: true});

    for (const file of fs.readdirSync(GENERATE_ARTICLE_DIR)) {
        if (/^issue-\d+\.json$/.test(file) || ['index.json', 'index.mjs', 'search-index.json', 'errors.json'].includes(file)) {
            fs.unlinkSync(path.join(GENERATE_ARTICLE_DIR, file));
        }
    }
};

function findToken(tokens, predicate) {
    for (const token of tokens || []) {
        if (predicate(token)) return token;

        const nested = findToken(token.tokens, predicate);
        if (nested) return nested;
    }
}

function parseMonth(token) {
    if (token.type !== 'paragraph' || token.tokens?.length !== 1 || token.tokens[0].type !== 'strong') {
        return null;
    }

    return MONTH_MAP[token.tokens[0].text] || null;
}

function parseArticle(item) {
    const issueMatch = item.text.match(/^第\s+(\d+)\s+期：/);
    const linkToken = findToken(
        item.tokens,
        token => token.type === 'link' && /^docs\/issue-\d+\.md$/.test(token.href)
    );

    if (!issueMatch || !linkToken) return null;

    const sort = Number(issueMatch[1]);
    const fileNo = Number(linkToken.href.match(/^docs\/issue-(\d+)\.md$/)[1]);

    if (sort !== fileNo) return null;

    return {
        sort,
        article: `issue-${fileNo}.md`,
        title: linkToken.text
    };
}

export function parseWeeklyReadme(content) {
    const result = [];
    let currentYear = null;
    let currentMonth = null;

    for (const token of marked.lexer(content)) {
        if (token.type === 'heading' && token.depth === 2) {
            const year = Number(token.text);
            currentYear = year >= 1900 && year <= 2099 ? year : null;
            currentMonth = null;
            continue;
        }

        const month = parseMonth(token);
        if (month) {
            currentMonth = month;
            continue;
        }

        if (token.type === 'list' && currentYear && currentMonth) {
            for (const item of token.items) {
                const article = parseArticle(item);
                if (article) result.push({year: currentYear, month: currentMonth, ...article});
            }
        }
    }

    return result;
}

function extractIssueNumberFromTitle(title) {
    const match = compactText(title).match(/第\s*(\d+)\s*期/);
    return match ? Number(match[1]) : null;
}

function extractTitleFromHeading(headingText, fallbackTitle) {
    const text = compactText(headingText);
    const separatorMatch = text.match(/[：:]\s*(.+)$/);
    return separatorMatch?.[1]?.trim() || fallbackTitle || text;
}

function compactToken(token) {
    if (!token || typeof token !== 'object') return token;
    if (Array.isArray(token)) return token.map(compactToken);

    const result = {};
    for (const key of ['type', 'text', 'href', 'title', 'tokens', 'items', 'ordered', 'depth', 'header', 'rows', 'align']) {
        if (token[key] !== undefined) result[key] = compactToken(token[key]);
    }
    if (token.type === 'html' && token.raw !== undefined) result.raw = token.raw;
    return result;
}

function collectTextFromToken(token) {
    if (!token || typeof token !== 'object') return '';

    const parts = [];
    for (const key of ['tokens', 'items', 'header']) {
        if (Array.isArray(token[key])) parts.push(...token[key].map(collectTextFromToken));
    }
    if (Array.isArray(token.rows)) parts.push(...token.rows.flat().map(collectTextFromToken));

    return compactText(parts.filter(Boolean).join(' ') || token.text);
}

function walkInlineTokens(tokens, callback) {
    for (const token of tokens || []) {
        callback(token);
        walkInlineTokens(token.tokens, callback);

        for (const item of token.items || []) {
            walkInlineTokens(item.tokens, callback);
        }
    }
}

function getFirstImage(token) {
    let image = null;

    walkInlineTokens(token.tokens || [token], item => {
        if (!image && item.type === 'image') {
            image = {src: item.href, alt: item.text || '', title: item.title || null};
        }
    });

    return image;
}

function createBlock(token, index, headingId) {
    return {
        id: `block-${String(index + 1).padStart(5, '0')}`,
        type: token.type,
        depth: token.depth || null,
        headingId,
        text: collectTextFromToken(token),
        token: compactToken(token)
    };
}

export function parseWeeklyIssue({content, filePath, readmeEntry = null}) {
    const fileName = path.basename(filePath);
    const fileMatch = fileName.match(/^issue-(\d+)\.md$/);

    if (!fileMatch) throw new Error(`Invalid issue filename: ${fileName}`);
    if (!compactText(content)) throw new Error(`${fileName} is empty`);

    const number = Number(fileMatch[1]);
    const tokens = marked.lexer(content);
    const titleToken = tokens.find(token => token.type === 'heading' && token.depth === 1);

    if (!titleToken) throw new Error(`${fileName} missing level-1 title`);

    const numberFromTitle = extractIssueNumberFromTitle(titleToken.text);
    if (numberFromTitle && numberFromTitle !== number) {
        throw new Error(`${fileName} title issue number ${numberFromTitle} does not match filename ${number}`);
    }

    const title = extractTitleFromHeading(titleToken.text, readmeEntry?.title);
    const usedIds = new Map();
    const toc = [];
    const blocks = [];
    let cover = null;

    for (const token of tokens) {
        if (token.type === 'space') continue;

        let headingId = null;
        if (token.type === 'heading') {
            headingId = createUniqueId(createSlug(token.text, `heading-${blocks.length + 1}`), usedIds);
            toc.push({id: headingId, title: compactText(token.text), level: token.depth});
        }

        if (!cover) cover = getFirstImage(token);
        blocks.push(createBlock(token, blocks.length, headingId));
    }

    const text = compactText(blocks.map(block => block.text).filter(Boolean).join(' '));
    const firstSectionIndex = blocks.findIndex(block => block.type === 'heading' && block.depth >= 2);
    const summaryBlock = blocks
        .slice(Math.max(0, firstSectionIndex))
        .find(block => block.type === 'paragraph' && block.text && !block.text.startsWith('!['));

    return {
        number,
        title,
        fullTitle: compactText(titleToken.text),
        summary: trimSummary(summaryBlock?.text || text),
        cover,
        toc,
        blocks,
        searchText: text
    };
}

function listIssueFiles() {
    return fs.readdirSync(WEEKLY_DIR)
        .filter(file => /^issue-\d+\.md$/.test(file))
        .sort((a, b) => Number(b.match(/\d+/)[0]) - Number(a.match(/\d+/)[0]));
}

function createIndexEntry(issue, readmeEntry) {
    return {
        id: `issue-${issue.number}`,
        number: issue.number,
        title: issue.title,
        fullTitle: issue.fullTitle,
        year: readmeEntry?.year ?? null,
        month: readmeEntry?.month ?? null,
        href: `/issues/${issue.number}`,
        summary: issue.summary,
        cover: issue.cover
    };
}

function createSearchEntry(issue, indexEntry) {
    return {
        id: indexEntry.id,
        number: issue.number,
        title: issue.title,
        fullTitle: issue.fullTitle,
        year: indexEntry.year,
        month: indexEntry.month,
        href: indexEntry.href,
        summary: issue.summary,
        text: issue.searchText
    };
}

function generateContent() {
    cleanGeneratedFiles();

    const readmeIndex = parseWeeklyReadme(readFile(README_PATH));
    const readmeIndexByArticle = new Map(readmeIndex.map(item => [item.article, item]));
    const index = [];
    const searchIndex = [];
    const errors = [];

    for (const fileName of listIssueFiles()) {
        const filePath = path.join(WEEKLY_DIR, fileName);
        const readmeEntry = readmeIndexByArticle.get(fileName) || null;

        try {
            const {searchText, ...issue} = parseWeeklyIssue({
                content: readFile(filePath),
                filePath,
                readmeEntry
            });
            const indexEntry = createIndexEntry(issue, readmeEntry);

            saveJsonFile(path.join(GENERATE_ARTICLE_DIR, `issue-${issue.number}.json`), issue);
            index.push(indexEntry);
            searchIndex.push(createSearchEntry({...issue, searchText}, indexEntry));
        } catch (error) {
            errors.push({
                article: fileName,
                path: path.relative(ROOT_DIR, filePath).split(path.sep).join('/'),
                message: error instanceof Error ? error.message : String(error)
            });
        }
    }

    saveFile(path.join(GENERATE_ARTICLE_DIR, 'index.mjs'), `export const INDEX = ${JSON.stringify(index, null, 2)};\n`);
    saveJsonFile(path.join(GENERATE_ARTICLE_DIR, 'search-index.json'), searchIndex);
    saveJsonFile(path.join(GENERATE_ARTICLE_DIR, 'errors.json'), errors);

    console.log(`Generated ${index.length} issues, ${searchIndex.length} search records, ${errors.length} errors.`);
    if (errors.length) console.warn('Some issues failed to parse and were removed from generated indexes.');
}

generateContent();

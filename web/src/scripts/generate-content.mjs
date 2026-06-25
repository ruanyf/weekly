// 用于解析 docs 的内容，生成运行时直接读取的 JSON 静态产物。
import crypto from 'node:crypto';
import fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from 'marked';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const WEB_SRC_DIR = path.resolve(SCRIPT_DIR, '..');
const WEB_DIR = path.resolve(WEB_SRC_DIR, '..');
const ROOT_DIR = path.resolve(WEB_DIR, '..');

// 索引目录
const README_PATH = path.join(ROOT_DIR, 'README.md');

// 内容目录
const WEEKLY_DIR = path.join(ROOT_DIR, 'docs');

// 生成文件目录
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

/*============================================================================================*/
/*=================================   工具类   ================================================*/
/*============================================================================================*/

const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8');
};

const saveFile = (filePath, data) => {
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
    return fs.writeFileSync(filePath, data, 'utf-8');
};

const saveJsonFile = (filePath, data) => {
    return saveFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
};

const sha256 = (content) => {
    return crypto.createHash('sha256').update(content).digest('hex');
};

const relativeToRoot = (filePath) => {
    return path.relative(ROOT_DIR, filePath).split(path.sep).join('/');
};

const compactText = (text) => {
    return String(text || '').replace(/\s+/g, ' ').trim();
};

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

const cleanGeneratedJsonFiles = () => {
    fs.mkdirSync(GENERATE_ARTICLE_DIR, {recursive: true});

    for (const file of fs.readdirSync(GENERATE_ARTICLE_DIR)) {
        if (
            /^issue-\d+\.json$/.test(file) ||
            ['index.json', 'search-index.json', 'errors.json'].includes(file)
        ) {
            fs.unlinkSync(path.join(GENERATE_ARTICLE_DIR, file));
        }
    }
};

/*============================================================================================*/
/*=================================   读取 README 文件构建索引   ================================*/
/*============================================================================================*/

function findToken(tokens, predicate) {
    for (const token of tokens || []) {
        if (predicate(token)) {
            return token;
        }

        const nested =
            findToken(token.tokens, predicate);

        if (nested) {
            return nested;
        }
    }
}

function parseMonth(token) {
    if (
        token.type !== 'paragraph' ||
        token.tokens?.length !== 1 ||
        token.tokens[0].type !== 'strong'
    ) {
        return null;
    }

    return MONTH_MAP[token.tokens[0].text] || null;
}

function parseArticle(item) {
    const issueMatch =
        item.text.match(/^第\s+(\d+)\s+期：/);

    const linkToken =
        findToken(
            item.tokens,
            token =>
                token.type === 'link' &&
                /^docs\/issue-\d+\.md$/.test(token.href)
        );

    if (!issueMatch || !linkToken) {
        return null;
    }

    const sort =
        Number(issueMatch[1]);

    const fileMatch =
        linkToken.href.match(/^docs\/issue-(\d+)\.md$/);

    const fileNo =
        Number(fileMatch[1]);

    // 防止 README 写错
    if (sort !== fileNo) {
        return null;
    }

    return {
        sort,
        article: `issue-${fileNo}.md`,
        title: linkToken.text
    };
}

/**
 * 解析 README 文件
 *
 * @param content
 * @returns  [{"year":2026,"title":this is title,"month":"6","sort":400,"article":"issue-400.md"}]
 */
export function parseWeeklyReadme(content) {
    const result = [];

    let currentYear = null;
    let currentMonth = null;

    const tokens =
        marked.lexer(content);

    for (const token of tokens) {
        if (token.type === 'heading' && token.depth === 2) {
            const year =
                Number(token.text);

            if ((year >= 1900) && (year <= 2099)) {
                currentYear = year;
            } else {
                currentYear = null;
            }

            currentMonth = null;
            continue;
        }

        const month =
            parseMonth(token);

        if (month) {
            currentMonth = month;
            continue;
        }

        if (token.type === 'list' && currentYear && currentMonth) {
            for (const item of token.items) {
                const article =
                    parseArticle(item);

                if (!article) {
                    continue;
                }

                result.push({
                    year: currentYear,
                    month: currentMonth,
                    ...article
                });
            }
        }
    }

    return result;
}

/*============================================================================================*/
/*=================================    解析 article issue 文件内容   ===========================*/
/*============================================================================================*/

function extractIssueNumberFromTitle(title) {
    const match = compactText(title).match(/第\s*(\d+)\s*期/);
    return match ? Number(match[1]) : null;
}

function extractTitleFromHeading(headingText, fallbackTitle) {
    const text = compactText(headingText);
    const separatorMatch = text.match(/[：:]\s*(.+)$/);

    if (separatorMatch?.[1]) {
        return separatorMatch[1].trim();
    }

    return fallbackTitle || text;
}

function normalizeToken(token) {
    if (!token || typeof token !== 'object') {
        return token;
    }

    if (Array.isArray(token)) {
        return token.map(item => normalizeToken(item));
    }

    const result = {};

    for (const [key, value] of Object.entries(token)) {
        if (typeof value === 'function' || value === undefined) {
            continue;
        }

        result[key] = normalizeToken(value);
    }

    return result;
}

function collectTextFromToken(token) {
    if (!token || typeof token !== 'object') {
        return '';
    }

    if (token.type === 'image') {
        return compactText(token.text);
    }

    if (token.type === 'code') {
        return compactText(token.text);
    }

    const parts = [];

    if (Array.isArray(token.tokens)) {
        parts.push(...token.tokens.map(item => collectTextFromToken(item)));
    } else if (typeof token.text === 'string') {
        parts.push(token.text);
    }

    if (Array.isArray(token.items)) {
        parts.push(...token.items.map(item => collectTextFromToken(item)));
    }

    if (Array.isArray(token.header)) {
        parts.push(...token.header.map(item => collectTextFromToken(item)));
    }

    if (Array.isArray(token.rows)) {
        parts.push(...token.rows.flat().map(item => collectTextFromToken(item)));
    }

    return compactText(parts.filter(Boolean).join(' '));
}

function walkInlineTokens(tokens, callback) {
    for (const token of tokens || []) {
        callback(token);

        if (token.tokens) {
            walkInlineTokens(token.tokens, callback);
        }

        if (token.items) {
            for (const item of token.items) {
                walkInlineTokens(item.tokens, callback);
            }
        }
    }
}

function getFirstImageFromToken(token) {
    let image = null;

    walkInlineTokens(token.tokens || [token], item => {
        if (!image && item.type === 'image') {
            image = {
                src: item.href,
                alt: item.text || '',
                title: item.title || null
            };
        }
    });

    return image;
}

function collectAssetsFromToken(token, blockId, sectionId) {
    const links = [];
    const images = [];

    walkInlineTokens(token.tokens || [token], item => {
        if (item.type === 'link') {
            links.push({
                href: item.href,
                title: item.title || null,
                text: compactText(item.text),
                blockId,
                sectionId
            });
        }

        if (item.type === 'image') {
            images.push({
                src: item.href,
                alt: item.text || '',
                title: item.title || null,
                blockId,
                sectionId
            });
        }
    });

    return {links, images};
}

function createBlock(token, index, sectionId, headingId) {
    const blockId = `block-${String(index + 1).padStart(5, '0')}`;

    return {
        id: blockId,
        type: token.type,
        sectionId,
        headingId: headingId || null,
        depth: token.depth || null,
        ordered: token.ordered ?? null,
        raw: token.raw || '',
        text: collectTextFromToken(token),
        token: normalizeToken(token)
    };
}

function createSection(headingToken, id, blockIndex) {
    return {
        id,
        title: compactText(headingToken.text),
        level: headingToken.depth,
        blockIds: [],
        startBlockIndex: blockIndex,
        endBlockIndex: blockIndex,
        text: '',
        summary: '',
        cover: null
    };
}

function pushBlockToSection(section, block) {
    section.blockIds.push(block.id);
    section.endBlockIndex = Math.max(section.endBlockIndex, Number(block.id.replace('block-', '')) - 1);

    if (block.text) {
        section.text = compactText(`${section.text} ${block.text}`);
    }

    if (!section.summary && block.type === 'paragraph' && block.text) {
        section.summary = trimSummary(block.text);
    }

    if (!section.cover) {
        section.cover = getFirstImageFromToken(block.token);
    }
}

function buildSearchRecords(issue) {
    const records = issue.sections
        .filter(section => compactText(section.text))
        .map(section => ({
            id: `${issue.id}-${section.id}`,
            issueId: issue.id,
            number: issue.number,
            title: issue.title,
            year: issue.year,
            month: issue.month,
            sectionId: section.id,
            sectionTitle: section.title,
            href: `/issues/${issue.number}#${section.id}`,
            text: compactText(`${issue.title} ${section.title} ${section.text}`)
        }));

    if (records.length) {
        return records;
    }

    return [{
        id: issue.id,
        issueId: issue.id,
        number: issue.number,
        title: issue.title,
        year: issue.year,
        month: issue.month,
        sectionId: null,
        sectionTitle: null,
        href: `/issues/${issue.number}`,
        text: issue.search.text
    }];
}

/**
 * 解析单篇周刊 Markdown。
 *
 * 该方法保留 source.markdown 和每个 block 的 raw/token，保证未来渲染器升级时仍能回到原始信息。
 *
 * @param {object} params
 * @param {string} params.content
 * @param {string} params.filePath
 * @param {object|null} params.readmeEntry
 * @returns {object}
 */
export function parseWeeklyIssue({content, filePath, readmeEntry = null}) {
    const fileName = path.basename(filePath);
    const fileMatch = fileName.match(/^issue-(\d+)\.md$/);

    if (!fileMatch) {
        throw new Error(`Invalid issue filename: ${fileName}`);
    }

    if (!compactText(content)) {
        throw new Error(`${fileName} is empty`);
    }

    const number = Number(fileMatch[1]);
    const warnings = [];
    const markedTokens = marked.lexer(content);
    const titleToken = markedTokens.find(token => token.type === 'heading' && token.depth === 1);

    if (!titleToken) {
        throw new Error(`${fileName} missing level-1 title`);
    }

    const numberFromTitle = extractIssueNumberFromTitle(titleToken.text);

    if (numberFromTitle && numberFromTitle !== number) {
        throw new Error(`${fileName} title issue number ${numberFromTitle} does not match filename ${number}`);
    }

    if (!readmeEntry) {
        warnings.push('missing-readme-index-entry');
    }

    const title = extractTitleFromHeading(titleToken.text, readmeEntry?.title);
    const usedIds = new Map();
    const blocks = [];
    const toc = [];
    const sections = [];
    const links = [];
    const images = [];
    const introSection = {
        id: 'intro',
        title: '导语',
        level: 1,
        blockIds: [],
        startBlockIndex: 0,
        endBlockIndex: 0,
        text: '',
        summary: '',
        cover: null
    };

    let currentSection = introSection;

    for (const token of markedTokens) {
        if (token.type === 'space') {
            continue;
        }

        let headingId = null;

        if (token.type === 'heading') {
            headingId = createUniqueId(
                createSlug(token.text, `heading-${blocks.length + 1}`),
                usedIds
            );

            toc.push({
                id: headingId,
                title: compactText(token.text),
                level: token.depth
            });

            if (token.depth >= 2) {
                currentSection = createSection(token, headingId, blocks.length);
                sections.push(currentSection);
            }
        }

        const block = createBlock(token, blocks.length, currentSection.id, headingId);
        blocks.push(block);

        if (currentSection === introSection || token.type !== 'heading' || token.depth !== 1) {
            pushBlockToSection(currentSection, block);
        }

        const assets = collectAssetsFromToken(token, block.id, currentSection.id);
        links.push(...assets.links);
        images.push(...assets.images);
    }

    const visibleSections = introSection.blockIds.length ? [introSection, ...sections] : sections;
    const plainText = compactText(blocks.map(block => block.text).filter(Boolean).join(' '));
    const cover = images[0] || null;

    if (!sections.length) {
        warnings.push('missing-level-2-sections');
    }

    if (!cover) {
        warnings.push('missing-cover-image');
    }

    return {
        schemaVersion: 1,
        id: `issue-${number}`,
        number,
        sort: number,
        title,
        fullTitle: compactText(titleToken.text),
        year: readmeEntry?.year ?? null,
        month: readmeEntry?.month ?? null,
        publishedAt: null,
        source: {
            path: relativeToRoot(filePath),
            markdown: content,
            sha256: sha256(content),
            lineCount: content.split(/\r\n|\r|\n/).length
        },
        route: {
            href: `/issues/${number}`,
            json: `issue-${number}.json`
        },
        summary: trimSummary(visibleSections.find(section => section.id !== 'intro')?.summary || introSection.summary || plainText),
        cover,
        toc,
        sections: visibleSections,
        blocks,
        assets: {
            images,
            links
        },
        search: {
            title,
            headings: toc.map(item => item.title),
            text: plainText
        },
        diagnostics: {
            warnings
        }
    };
}

/*============================================================================================*/
/*=================================    生成静态 JSON 内容   ====================================*/
/*============================================================================================*/

function listIssueFiles() {
    return fs.readdirSync(WEEKLY_DIR)
        .filter(file => /^issue-\d+\.md$/.test(file))
        .sort((a, b) => {
            const aNo = Number(a.match(/\d+/)[0]);
            const bNo = Number(b.match(/\d+/)[0]);
            return bNo - aNo;
        });
}

function createIndexEntry(issue, readmeEntry) {
    return {
        id: issue.id,
        number: issue.number,
        sort: issue.sort,
        title: issue.title,
        fullTitle: issue.fullTitle,
        year: issue.year,
        month: issue.month,
        article: readmeEntry?.article || `${issue.id}.md`,
        json: issue.route.json,
        href: issue.route.href,
        summary: issue.summary,
        cover: issue.cover,
        toc: issue.toc,
        warningCount: issue.diagnostics.warnings.length
    };
}

function generateContent() {
    cleanGeneratedJsonFiles();

    const readmeIndex = parseWeeklyReadme(readFile(README_PATH));
    const readmeIndexByArticle = new Map(readmeIndex.map(item => [item.article, item]));
    const index = [];
    const searchIndex = [];
    const errors = [];

    for (const fileName of listIssueFiles()) {
        const filePath = path.join(WEEKLY_DIR, fileName);
        const readmeEntry = readmeIndexByArticle.get(fileName) || null;

        try {
            const issue = parseWeeklyIssue({
                content: readFile(filePath),
                filePath,
                readmeEntry
            });

            saveJsonFile(path.join(GENERATE_ARTICLE_DIR, `issue-${issue.number}.json`), issue);
            index.push(createIndexEntry(issue, readmeEntry));
            searchIndex.push(...buildSearchRecords(issue));
        } catch (error) {
            errors.push({
                article: fileName,
                path: relativeToRoot(filePath),
                message: error instanceof Error ? error.message : String(error)
            });
        }
    }

    saveJsonFile(path.join(GENERATE_ARTICLE_DIR, 'index.json'), index);
    saveJsonFile(path.join(GENERATE_ARTICLE_DIR, 'search-index.json'), searchIndex);
    saveJsonFile(path.join(GENERATE_ARTICLE_DIR, 'errors.json'), errors);

    saveFile(
        path.join(GENERATE_ARTICLE_DIR, 'index.mjs'),
        `export const INDEX = ${JSON.stringify(index, null, 2)};\nexport const SEARCH_INDEX = ${JSON.stringify(searchIndex, null, 2)};\nexport const ERRORS = ${JSON.stringify(errors, null, 2)};\n`
    );

    console.log(`Generated ${index.length} issues, ${searchIndex.length} search records, ${errors.length} errors.`);

    if (errors.length) {
        console.warn('Some issues failed to parse and were removed from generated indexes.');
    }
}

generateContent();

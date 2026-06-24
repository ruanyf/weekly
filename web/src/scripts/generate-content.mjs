// 用于解析 docs 的内容
import fs from 'node:fs'
import {marked} from 'marked';
import * as path from "node:path";

//索引目录
const README_PATH = '../../../README.md'

//生成文件目录
const GENERATE_ARTICLE_DIR = '../article'

const MONTH_MAP = {
    一月: "1",
    二月: "2",
    三月: "3",
    四月: "4",
    五月: "5",
    六月: "6",
    七月: "7",
    八月: "8",
    九月: "9",
    十月: "10",
    十一月: "11",
    十二月: "12"
};

/*============================================================================================*/
/*=================================   工具类   ================================================*/
/*============================================================================================*/

async function readFileWithStream(filePath, callback) {
    const readStream = fs.createReadStream(filePath, {encoding: 'utf-8'});
    for await (const chunk of readStream) {
        callback(chunk)
    }
}

const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8')
}

const saveFile = (filePath, data) => {
    return fs.writeFileSync(filePath, data, 'utf-8')
}

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
        title: //TODO
    };
}

/**
 * 解析 README 文件
 *
 * @param content
 * @returns  [{"year":2026,"title":this is title,"month":"6","sort":400,"article":"issue-400.md"}]
 */
function parseWeekly(content) {
    try {
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
    } catch (e) {
        console.error('err',e)
        return []
    }
}

//创建索引目录
saveFile(path.join(GENERATE_ARTICLE_DIR,'index.mjs'),`export const INDEX = ${JSON.stringify(parseWeekly(readFile(README_PATH)))}`)

/*============================================================================================*/
/*=================================    解析 article 内容   ====================================*/
/*============================================================================================*/
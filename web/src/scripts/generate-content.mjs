// 用于解析 docs 的内容
import fs from 'node:fs'
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

/**
 * 解析 README 文件
 *
 * @param content
 * @returns  [{"year":2026,"month":"6","sort":400,"article":"issue-400.md"}]
 */
function parseWeekly(content) {
    try {
        const result = [];

        let currentYear = null;
        let currentMonth = null;

        const lines = content.split('\n');

        for (const line of lines) {

            // 年份
            const yearMatch =
                line.match(/^##\s+((?:19|20)\d{2})$/);

            if (yearMatch) {
                currentYear = Number(yearMatch[1]);
                currentMonth = null;
                continue;
            }

            // 月份
            const monthMatch =
                line.match(/^\*\*(.+?)\*\*$/);

            if (monthMatch) {

                const month =
                    MONTH_MAP[monthMatch[1]];

                if (month) {
                    currentMonth = month;
                }

                continue;
            }

            // 文章
            const articleMatch =
                line.match(
                    /^-\s+第\s+(\d+)\s+期：.*?\(docs\/issue-(\d+)\.md\)$/
                );

            if (
                articleMatch &&
                currentYear &&
                currentMonth
            ) {

                const sort =
                    Number(articleMatch[1]);

                const fileNo =
                    Number(articleMatch[2]);

                // 防止 README 写错
                if (sort !== fileNo) {
                    continue;
                }

                result.push({
                    year: currentYear,
                    month: currentMonth,
                    sort,
                    article: `issue-${fileNo}.md`
                });
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


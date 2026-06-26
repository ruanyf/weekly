import {notFound} from 'next/navigation';
import {NavigationBar} from '@/components/NavigationBar';
import {Article} from '@/components/Article';
import {ReaderShell} from '@/components/ReaderShell';
import {getIssue, getIndex} from '../../_data';

function buildPickerData(index, currentNumber) {
    const years = [...new Set(index.map(i => i.year))].sort((a, b) => b - a);
    const monthsByYear = {};
    const issuesByYearMonth = {};

    for (const item of index) {
        if (!monthsByYear[item.year]) monthsByYear[item.year] = new Set();
        monthsByYear[item.year].add(item.month);
        const key = `${item.year}-${item.month}`;
        if (!issuesByYearMonth[key]) issuesByYearMonth[key] = [];
        issuesByYearMonth[key].push({number: item.number, title: item.title});
    }

    const monthsByYearSorted = {};
    for (const [y, months] of Object.entries(monthsByYear)) {
        monthsByYearSorted[y] = [...months].sort((a, b) => Number(b) - Number(a));
    }

    const currentEntry = index.find(i => i.number === currentNumber);

    return {
        years,
        monthsByYear: monthsByYearSorted,
        issuesByYearMonth,
        initialYear: currentEntry?.year ?? years[0],
        initialMonth: currentEntry?.month ?? monthsByYearSorted[years[0]]?.[0] ?? '1'
    };
}

export default async function IssuePage({params}) {
    const {number} = await params;
    const issueNumber = Number(number);
    const issue = getIssue(issueNumber);

    if (!issue) notFound();

    const index = getIndex();
    const pickerData = buildPickerData(index, issueNumber);
    const sidebarToc = issue.toc.filter(t => t.level >= 2);

    return (
        <>
            <NavigationBar/>
            <ReaderShell pickerData={pickerData} toc={sidebarToc} issueNumber={issueNumber}>
                <article className="article" data-reading-article>
                    <div className="article__head">
                        <div className="meta-row">
                            <span className="badge">第 {issue.number} 期</span>
                        </div>
                        <h1>{issue.title}</h1>
                    </div>
                    <Article
                        content={issue.blocks.filter(b => b.type !== 'heading' || b.depth !== 1)}
                        className="article__body"
                    />
                </article>
            </ReaderShell>
        </>
    );
}

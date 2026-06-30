import Link from 'next/link';
import {NavigationBar} from '@/components/NavigationBar';
import {getSearchIndex} from '../_data';

function normalize(value) {
    return String(value ?? '').toLowerCase().trim();
}

function compactText(value) {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function getTerms(query) {
    return normalize(query).split(/\s+/).filter(Boolean).slice(0, 6);
}

function scoreText(text, terms, weight) {
    const normalized = normalize(text);
    return terms.reduce((score, term) => normalized.includes(term) ? score + weight : score, 0);
}

function makeSnippet(text, query, fallback) {
    const plain = compactText(text || fallback);
    if (!plain) return '';

    const terms = getTerms(query);
    const lower = normalize(plain);
    const matched = terms.find(term => lower.includes(term));
    if (!matched) return plain.length > 140 ? `${plain.slice(0, 140)}...` : plain;

    const index = lower.indexOf(matched);
    const start = Math.max(0, index - 44);
    const end = Math.min(plain.length, index + matched.length + 96);
    return `${start > 0 ? '...' : ''}${plain.slice(start, end)}${end < plain.length ? '...' : ''}`;
}

function searchIssues(index, query) {
    const terms = getTerms(query);
    if (terms.length === 0) return [];

    return index
        .map((item) => {
            const score =
                scoreText(item.fullTitle, terms, 10) +
                scoreText(item.title, terms, 8) +
                scoreText(item.summary, terms, 4) +
                scoreText(item.text, terms, 1);

            return {
                ...item,
                score,
                snippet: makeSnippet(item.text, query, item.summary)
            };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score || b.number - a.number)
        .slice(0, 30);
}

export default async function SearchPage({searchParams}) {
    const params = await searchParams;
    const query = compactText(params?.q ?? '');
    const index = getSearchIndex();
    const results = searchIssues(index, query);

    return (
        <>
            <NavigationBar/>
            <main className="page page--narrow">
                <section className="simple-hero">
                    <p className="eyebrow">Search</p>
                    <h1>搜索周刊</h1>
                    <form className="search-box" action="/search">
                        <span className="search-box__icon" aria-hidden="true">⌕</span>
                        <input
                            type="search"
                            name="q"
                            defaultValue={query}
                            placeholder="输入关键词、标题或期数"
                            aria-label="搜索周刊"
                        />
                        <button className="primary-button" type="submit">搜索</button>
                    </form>
                </section>

                <section className="result-list" aria-live="polite">
                    {!query && (
                        <p className="muted">输入关键词后，可以搜索周刊标题、摘要和正文。</p>
                    )}
                    {query && results.length === 0 && (
                        <p className="muted">没有找到相关周刊。</p>
                    )}
                    {results.map((item) => (
                        <Link className="result-card" href={item.href} key={item.id}>
                            <div className="meta-row">
                                <span className="badge">第 {item.number} 期</span>
                                <span className="badge">{item.year} 年 {item.month} 月</span>
                            </div>
                            <h3>{item.fullTitle}</h3>
                            <p className="muted">{item.snippet || item.summary}</p>
                        </Link>
                    ))}
                </section>
            </main>
        </>
    );
}

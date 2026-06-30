import Link from 'next/link';
import {NavigationBar} from '@/components/NavigationBar';
import {SearchBox} from '@/components/SearchBox';
import {getSearchIndex} from '../_data';
import {compactText, getTerms, searchIssues} from './search.mjs';

function highlight(text, terms) {
    if (!text || terms.length === 0) return text;

    const escaped = terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return text.split(new RegExp(`(${escaped.join('|')})`, 'ig')).map((part, index) => (
        terms.includes(part.toLowerCase()) ? <mark key={index}>{part}</mark> : part
    ));
}

export default async function SearchPage({searchParams}) {
    const params = await searchParams;
    const query = compactText(Array.isArray(params?.q) ? params.q[0] : params?.q).slice(0, 200);
    const terms = getTerms(query);
    const index = getSearchIndex();
    const results = searchIssues(index, query);

    return (
        <>
            <NavigationBar/>
            <main className="page page--narrow">
                <section className="simple-hero">
                    <p className="eyebrow">Search</p>
                    <h1>搜索周刊</h1>
                    <SearchBox defaultValue={query}/>
                </section>

                <section className="section" aria-labelledby="search-result-title">
                    <div className="section__header section__header--simple">
                        <h2 id="search-result-title">结果</h2>
                        <span className="micro">{query ? `${results.length} 条结果` : '输入关键词后搜索'}</span>
                    </div>
                    <div className="result-list" aria-live="polite">
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
                                <h3>{highlight(item.fullTitle, terms)}</h3>
                                <p className="muted">{highlight(item.snippet || item.summary, terms)}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

'use client';

import {useState, useEffect, useCallback} from 'react';
import {useRouter} from 'next/navigation';

export function ReaderShell({pickerData, toc, issueNumber, children}) {
    const router = useRouter();
    const [year, setYear] = useState(pickerData.initialYear);
    const [month, setMonth] = useState(pickerData.initialMonth);
    const [activeTocId, setActiveTocId] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            const scrollTop = window.scrollY;
            const docH = h.scrollHeight - window.innerHeight;
            setProgress(docH > 0 ? Math.min((scrollTop / docH) * 100, 100) : 0);

            let active = null;
            for (const item of toc) {
                const el = document.getElementById(item.id);
                if (el && el.getBoundingClientRect().top <= 120) active = item.id;
            }
            setActiveTocId(active);
        };
        window.addEventListener('scroll', onScroll, {passive: true});
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [toc]);

    const handleYearChange = useCallback((y) => {
        const yNum = Number(y);
        setYear(yNum);
        const months = pickerData.monthsByYear[yNum] || [];
        setMonth(months[0] || '');
    }, [pickerData.monthsByYear]);

    const months = pickerData.monthsByYear[year] || [];
    const issues = pickerData.issuesByYearMonth[`${year}-${month}`] || [];
    const isCurrentInList = issues.some(i => i.number === issueNumber);

    return (
        <>
            <div className="reading-bar" aria-hidden="true">
                <div className="reading-bar__fill" style={{width: `${progress}%`}}/>
            </div>
            <main className="page">
                <section className="issue-picker" aria-label="周刊筛选">
                    <div>
                        <p className="eyebrow">Issue</p>
                        <h1>周刊详情</h1>
                    </div>
                    <div className="issue-picker__controls">
                        <label>
                            <span>年份</span>
                            <select value={year} onChange={e => handleYearChange(e.target.value)}>
                                {pickerData.years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <span>月份</span>
                            <select value={month} onChange={e => setMonth(e.target.value)}>
                                {months.map(m => (
                                    <option key={m} value={m}>{m}月</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <span>期数</span>
                            <select
                                key={`${year}-${month}`}
                                defaultValue={isCurrentInList ? issueNumber : ''}
                                onChange={e => { if (e.target.value) router.push(`/issues/${e.target.value}`); }}
                            >
                                {!isCurrentInList && <option value="" disabled>选择周刊</option>}
                                {issues.map(i => (
                                    <option key={i.number} value={i.number}>第 {i.number} 期</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </section>

                <div className="reader-shell reader-shell--calm">
                    <aside className="toc" aria-label="目录导航">
                        <div className="panel panel--plain">
                            <p className="eyebrow">目录</p>
                            <ul className="toc__list">
                                {toc.map(item => (
                                    <li key={item.id}>
                                        <a
                                            className={`toc__link${activeTocId === item.id ? ' is-active' : ''}`}
                                            href={`#${item.id}`}
                                            style={{paddingLeft: `${(item.level - 2) * 12 + 10}px`}}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {children}

                    <aside className="reader-tools" aria-label="阅读状态">
                        <div className="tool-card tool-card--quiet">
                            <p className="eyebrow">进度</p>
                            <h3><span>{Math.round(progress)}%</span></h3>
                            <div className="progress-track">
                                <div className="progress-fill" style={{width: `${progress}%`}}/>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}

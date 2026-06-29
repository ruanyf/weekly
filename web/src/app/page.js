import {NavigationBar} from "@/components/NavigationBar";
import {SearchBox} from "@/components/SearchBox";
import {getIndex} from "./_data";
import Link from "next/link";

export default function Home() {
    const index = getIndex();
    const latest = index[0];

    return (
        <>
            <NavigationBar />
            <main className="page home-page">
                <section className="home-hero">
                    <h1>这一周，科技世界发生了什么。</h1>
                    <SearchBox />
                </section>

                <Link className="latest-card" href={latest.href}
                      aria-label={`阅读第 ${latest.number} 期`}>
                    <div className="latest-card__media">
                        <img src={latest.cover.src} alt={`第 ${latest.number} 期封面图`}/>
                    </div>
                    <div className="latest-card__body">
                        <p className="eyebrow">最新一期 · {latest.year} 年 {latest.month} 月</p>
                        <h2>{latest.title}</h2>
                        <p>{latest.summary}</p>
                        <span className="inline-link">
                            开始阅读
                            <span className="inline-link__arrow" aria-hidden="true">&rarr;</span>
                        </span>
                    </div>
                </Link>
            </main>
        </>
    );
}

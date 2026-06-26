import Link from "next/link";
import {NavigationBar} from "@/components/NavigationBar";
import {getIndex} from "./_data";

export default function Home() {
    const index = getIndex();
    const latest = index[0];

    return (
        <>
            <NavigationBar />
            <main className="mx-auto min-h-[calc(100vh-56px)] w-[min(1180px,calc(100%-40px))] grid content-center gap-12 py-14 pb-24">
                <section className="text-center" aria-labelledby="home-title">
                    <h1 id="home-title" className="mx-auto mb-4 max-w-225 text-[clamp(48px,8vw,104px)] font-760 leading-[0.95] tracking-[-0.045em] text-[var(--text)]">
                        科技爱好者周刊
                    </h1>
                    <form className="mx-auto mt-8.5 w-[min(100%,680px)] flex flex-col gap-2 rounded-6.5 border border-[var(--line)] bg-[var(--surface)] p-1.75 shadow-[var(--small-shadow),inset_0_1px_rgba(255,255,255,.45)] backdrop-blur-2xl focus-within:ring-2 focus-within:ring-#0071e3/28 sm:flex-row sm:items-center sm:rounded-full" action="/search" role="search">
                        <span className="hidden w-7.5 text-center text-[var(--subtle)] sm:inline">⌕</span>
                        <input className="h-11 min-w-0 flex-1 border-0 bg-transparent px-3 text-[var(--text)] outline-none placeholder:text-[var(--subtle)]" name="q" type="search" placeholder="搜索 AI、开源、rsync..." aria-label="搜索周刊内容" />
                        <button className="min-h-9.5 rounded-full border border-#0066cc bg-#0071e3 px-4 text-white shadow-[0_10px_26px_rgba(0,113,227,.28)] hover:bg-#005bb5" type="submit">
                            搜索
                        </button>
                    </form>
                </section>

                <section className="mx-auto grid w-[min(980px,100%)] overflow-hidden rounded-10 border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow),inset_0_1px_rgba(255,255,255,.45)] backdrop-blur-2xl md:grid-cols-[0.48fr_0.52fr]" aria-label="最新一期周刊">
                    <Link className="min-h-58 overflow-hidden bg-[var(--surface-soft)] md:min-h-82.5" href={latest.href} aria-label={`阅读第 ${latest.number} 期`}>
                        <span className="block h-full w-full bg-cover bg-center scale-102" style={{backgroundImage: `url(${latest.cover?.src})`}} />
                    </Link>
                    <div className="flex flex-col justify-center p-6 md:p-14.5">
                        <span className="mb-4 min-h-6.5 w-fit rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 text-xs text-[var(--muted)] inline-flex items-center">
                            最新一期
                        </span>
                        <h2 className="mb-2 text-[clamp(28px,3.2vw,44px)] font-720 leading-1.08 tracking-[-0.045em] text-[var(--text)]">
                            第 {latest.number} 期：{latest.title}
                        </h2>
                        <p className="mb-6 text-[var(--muted)]">{latest.summary}</p>
                        <Link className="min-h-9.5 w-fit rounded-full border border-#0066cc bg-#0071e3 px-4 text-white inline-flex items-center shadow-[0_10px_26px_rgba(0,113,227,.28)] hover:bg-#005bb5" href={latest.href}>
                            开始阅读
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

import {NavigationBar} from "../components/NavigationBar";

const latestIssue = {
    number: 400,
    date: "2026-06-05",
    title: "rsync 的争论",
    summary: "AI 生成基础工具版本引发开源维护争论，也让测试、信任和维护成本重新进入讨论中心。",
    image: "https://cdn.beekka.com/blogimg/asset/202606/bg2026060505.webp",
};

export default function Home() {
    return (
        <>
            <NavigationBar />
            <main className="mx-auto min-h-[calc(100vh-56px)] w-[min(1180px,calc(100%-40px))] grid content-center gap-12 py-14 pb-24">
                <section className="text-center" aria-labelledby="home-title">
                    <p className="mb-2.5 text-xs font-700 tracking-[0.08em] uppercase text-#0071e3">Weekly Web</p>
                    <h1 id="home-title" className="mx-auto mb-4 max-w-225 text-[clamp(48px,8vw,104px)] font-760 leading-[0.95] tracking-[-0.045em] text-#1d1d1f">
                        科技周刊，安静地读。
                    </h1>
                    <p className="mx-auto max-w-180 text-[clamp(19px,2.1vw,26px)] leading-1.35 tracking-[-0.03em] text-#6e6e73">
                        保留最新一期和搜索入口，让阅读从一个清晰动作开始。
                    </p>
                    <form className="mx-auto mt-8.5 w-[min(100%,680px)] flex flex-col gap-2 rounded-6.5 border border-black/8 bg-white/72 p-1.75 shadow-[0_14px_34px_rgba(0,0,0,.08),inset_0_1px_rgba(255,255,255,.65)] backdrop-blur-2xl sm:flex-row sm:items-center sm:rounded-full" action="/" role="search">
                        <span className="hidden w-7.5 text-center text-#77777d sm:inline">⌕</span>
                        <input className="h-11 min-w-0 flex-1 border-0 bg-transparent px-3 text-#1d1d1f outline-none placeholder:text-#77777d" name="q" type="search" placeholder="搜索 AI、开源、rsync..." aria-label="搜索周刊内容" />
                        <button className="min-h-9.5 rounded-full border border-#0066cc bg-#0071e3 px-4 text-white shadow-[0_10px_26px_rgba(0,113,227,.28)] hover:bg-#005bb5" type="submit">
                            搜索
                        </button>
                    </form>
                </section>

                <section id="latest" className="mx-auto grid w-[min(980px,100%)] overflow-hidden rounded-10 border border-black/8 bg-white/72 shadow-[0_28px_80px_rgba(0,0,0,.12),inset_0_1px_rgba(255,255,255,.6)] backdrop-blur-2xl md:grid-cols-[0.48fr_0.52fr]" aria-label="最新一期周刊">
                    <a className="min-h-58 overflow-hidden bg-white/50 md:min-h-82.5" href="#latest" aria-label={`阅读第 ${latestIssue.number} 期`}>
                        <span className="block h-full w-full bg-cover bg-center scale-102" style={{ backgroundImage: `url(${latestIssue.image})` }} />
                    </a>
                    <div className="flex flex-col justify-center p-6 md:p-14.5">
                        <span className="mb-4 min-h-6.5 w-fit rounded-full border border-black/8 bg-white/50 px-2.5 text-xs text-#6e6e73 inline-flex items-center">
                            最新一期 · {latestIssue.date}
                        </span>
                        <h2 className="mb-2 text-[clamp(28px,3.2vw,44px)] font-720 leading-1.08 tracking-[-0.045em] text-#1d1d1f">
                            第 {latestIssue.number} 期：{latestIssue.title}
                        </h2>
                        <p className="mb-6 text-#6e6e73">{latestIssue.summary}</p>
                        <a className="min-h-9.5 w-fit rounded-full border border-#0066cc bg-#0071e3 px-4 text-white inline-flex items-center shadow-[0_10px_26px_rgba(0,113,227,.28)] hover:bg-#005bb5" href="#latest">
                            开始阅读
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}

import {NavigationBar} from "@/components/NavigationBar";
import {SearchBox} from "@/components/SearchBox";
import {LatestIssueCard} from "@/components/LatestIssueCard";
import {getIndex} from "./_data";

export default function Home() {
    const index = getIndex();
    const latest = index[0];

    return (
        <>
            <NavigationBar />
            <main className="page home-page">
                <section className="home-hero">
                    <p className="eyebrow">Weekly Web</p>
                    <h1>科技周刊，安静地读。</h1>
                    <p className="lead">保留最新一期和搜索入口，让阅读从一个清晰动作开始。</p>
                    <SearchBox />
                </section>

                <LatestIssueCard issue={latest} />
            </main>
        </>
    );
}

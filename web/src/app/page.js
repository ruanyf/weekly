import {NavigationBar} from "@/components/NavigationBar";
import {WeeklyArchiveScene} from "@/components/WeeklyArchiveScene";
import {getIndex} from "./_data";

export default function Home() {
    const index = getIndex();
    const latest = index[0];

    return (
        <>
            <NavigationBar />
            <main className="home-3d-page">
                <WeeklyArchiveScene latestHref={latest.href} latestNumber={latest.number} />
            </main>
        </>
    );
}

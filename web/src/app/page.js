import {NavigationBar} from "../components/NavigationBar";

/**
 * 主页
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
export default function Home() {
    return (
        <main className="py-20 px-12 text-center flex flex-col items-center gap-20px">
            <section className='w-full bg-black'>
                <NavigationBar />
            </section>
            <article className='bg-cyan w-full'>
                <span className="text-blue text-5xl text-hover:red cursor-default">Nextjs</span>
                <div className="i-carbon-car inline-block text-4xl"/>
                <button className="btn w-10rem">按钮</button>
            </article>
        </main>
    )
}
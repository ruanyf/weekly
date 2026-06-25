import Link from "next/link";
import {ThemeSelect} from "./ThemeSelect";
import GitHub from "./GitHub";

const navItems = ["首页", "周刊", "搜索", "个人"];

export function NavigationBar() {
    return (
        <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--surface)] backdrop-blur-2xl">
            <div className="mx-auto min-h-14 w-[min(1180px,calc(100%-40px))] flex flex-wrap items-center gap-4 py-3 md:flex-nowrap md:py-0">
                <Link className="inline-flex items-center gap-2.5 font-650 tracking-[-0.02em]" href="https://github.com/ruanyf/weekly" aria-label="Weekly Web 首页">
                    <GitHub />
                    <span>Weekly</span>
                </Link>
                <nav className="order-3 w-full flex gap-1 overflow-x-auto md:order-none md:ml-auto md:w-auto" aria-label="主导航">
                    {navItems.map((item) => (
                        <Link key={item} className="min-h-8.5 rounded-full px-3.5 text-[var(--muted)] inline-flex items-center whitespace-nowrap hover:bg-[var(--surface-soft)] hover:text-[var(--text)]" href="/">
                            {item}
                        </Link>
                    ))}
                </nav>
                <ThemeSelect />
            </div>
        </header>
    )
}
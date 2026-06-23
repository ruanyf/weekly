import Link from "next/link";
import {ThemeSelect} from "./ThemeSelect";

const navItems = ["首页", "周刊", "搜索", "个人"];

export function NavigationBar() {
    return (
        <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--surface)] backdrop-blur-2xl">
            <div className="mx-auto min-h-14 w-[min(1180px,calc(100%-40px))] flex flex-wrap items-center gap-4 py-3 md:flex-nowrap md:py-0">
                <Link className="inline-flex items-center gap-2.5 font-650 tracking-[-0.02em]" href="/" aria-label="Weekly Web 首页">
                    <span className="h-7.5 w-7.5 rounded-2.5 bg-gradient-to-br from-#1d1d1f to-#48484a text-white text-xs grid place-items-center shadow-[inset_0_1px_rgba(255,255,255,.22),0_10px_24px_rgba(0,0,0,.18)]">W</span>
                    <span>Weekly Web</span>
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
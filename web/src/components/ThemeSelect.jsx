"use client";

import {useEffect, useRef} from "react";

const modes = [
    ["system", "系统"],
    ["light", "浅色"],
    ["dark", "深色"],
];

function applyTheme(mode) {
    document.documentElement.dataset.theme = mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : mode;
}

export function ThemeSelect() {
    const selectRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem("weeklyWebTheme") || "system";
        if (selectRef.current) selectRef.current.value = saved;
        applyTheme(saved);

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const syncSystem = () => {
            if ((localStorage.getItem("weeklyWebTheme") || "system") === "system") applyTheme("system");
        };
        media.addEventListener("change", syncSystem);
        return () => media.removeEventListener("change", syncSystem);
    }, []);

    function changeMode(event) {
        const nextMode = event.target.value;
        localStorage.setItem("weeklyWebTheme", nextMode);
        applyTheme(nextMode);
    }

    return (
        <select ref={selectRef} className="h-8.5 max-w-22 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2 text-[var(--text)]" aria-label="主题模式" defaultValue="system" onChange={changeMode}>
            {modes.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </select>
    );
}

import "./globals.css";

export const metadata = {
  title: "Weekly Web",
  description: "科技爱好者周刊 Web 阅读平台",
};

const themeScript = `
try {
  const mode = localStorage.getItem("weeklyWebTheme") || "system";
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = mode === "system" && dark ? "dark" : mode;
} catch {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}

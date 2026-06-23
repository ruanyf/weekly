import "./globals.css";

export const metadata = {
  title: "Weekly Web",
  description: "科技爱好者周刊 Web 阅读平台",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

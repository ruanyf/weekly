import "./globals.css";

export const metadata = {
  title: "Weekly Web",
  description: "科技周刊",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

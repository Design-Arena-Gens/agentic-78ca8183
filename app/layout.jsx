export const metadata = {
  title: "Fjal? nga Abdullah ibn Mubarak",
  description: "Th?nie rreth lotit dhe qarjes (p?rul?sis?)",
  metadataBase: new URL("https://agentic-78ca8183.vercel.app")
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <span>? {new Date().getFullYear()} - P?rkujtim i dobish?m</span>
        </footer>
      </body>
    </html>
  );
}

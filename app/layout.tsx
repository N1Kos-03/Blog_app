import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог о разработке и технологиях",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
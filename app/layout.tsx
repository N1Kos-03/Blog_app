import "./globals.css";
import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "my_blog - мой лучший блог",
  description: "Блог о разработке",
};

export default function MyApp({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
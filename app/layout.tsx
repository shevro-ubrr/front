import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "./globals.css";

const font = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Финансовая грамотность",
  description: "мяу какой крутой сайт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${font.variable}antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}

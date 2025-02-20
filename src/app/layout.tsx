import "./globals.css";
import type { Metadata } from "next";

import { Oxanium, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "DevStage",
};

const oxianium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const monstserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxianium.variable} ${monstserrat.variable}`}>
      <body className="bg-gray-900 bg-[url(/background.png)] bg-top bg-no-repeat text-gray-100 antialiased md:bg-right-top">
        <main className="mx-auto max-w-[1240px] px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  );
}

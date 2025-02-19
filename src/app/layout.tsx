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
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        {children}
      </body>
    </html>
  );
}

import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Cursor from "@/components/cursor";

export const metadata: Metadata = {
  title: "Martnetics",
  description: "Your stop for a unique and personalized experience",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="cursor-none">
        {children}

        <Cursor />
      </body>
    </html>
  );
}

import "@/styles/globals.css";

import { type Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Cursor from "@/components/cursor";

export const metadata: Metadata = {
  title: "Martnetics",
  description: "Your stop for a unique and personalized experience",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body className="cursor-none bg-black text-white">
        {children}

        <Cursor />
      </body>
    </html>
  );
}

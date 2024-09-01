import type { Metadata } from "next";
import "./globals.css";
import { Afacad, Jost } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const jost = Jost({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Is it Spooky Time yet?",
  description:
    "Wondering whether or not it's Spooky Time? You are aren't you. Well, look no further, the answer to said question lies here. ",

  keywords: "halloween, spooky time, when is halloween, october",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />

        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

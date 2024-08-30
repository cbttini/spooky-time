import type { Metadata } from "next";
import "./globals.css";
import { Afacad } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const afacad = Afacad({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Is it Spooky Time yet?",
  description:
    "Wondering whether or not it's spooky time? You are are'nt you. Well look no further, the answer to said question lies here. ",

  keywords: "halloween, spooky time, when is halloween, october",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

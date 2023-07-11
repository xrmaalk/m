import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projectify",
  description: "Point, Click and Learn....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href=".\favicon.ico" />
      </Head>
      <body className={`${inter.className} overflow-hidden`}>{children}</body>
    </html>
  );
}

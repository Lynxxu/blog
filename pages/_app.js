import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Cormorant } from "next/font/google";
import { EB_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${cormorant.variable} ${garamond.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}

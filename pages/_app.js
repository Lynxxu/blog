import "@/styles/globals.css";
import { Inter, Cormorant, EB_Garamond, Open_Sans } from "next/font/google";

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

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${cormorant.variable} ${garamond.variable} ${openSans.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default App;

import "@/styles/globals.css";
import { Inter, Cormorant, EB_Garamond, Open_Sans, Noto_Sans, Noto_Sans_SC, Zen_Kaku_Gothic_New } from "next/font/google";
import { LanguageProvider } from '../context/LanguageContext.js';

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

const notoSansCN = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-notoSansCN",
  weight: ['100', '300', '400', '500', '700', '900'],
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  variable: "--font-zenKakuGothicNew",
  weight: ['300', '400', '500', '700', '900'],
});

function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${cormorant.variable} ${garamond.variable} ${openSans.variable} ${notoSansCN.variable} ${zenKaku.variable} font-sans`}
    >
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </main>
  );
}

export default App;

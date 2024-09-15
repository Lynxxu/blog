import Head from "next/head";
import Background from "../components/PersonalWeb/Background.jsx";
import Footer from "../components/footer.jsx";
import Navigation from "../components/PersonalWeb/Navigation.jsx";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContentContainer from "../components/PersonalWeb/Utilities.jsx";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { BackgroundContainer } from "../components/PersonalWeb/Utilities.jsx";

export default function About() {
  const { t } = useTranslation('common');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [windowHeight, setWindowHeight] = useState(600);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight(); // Set initial height
    window.addEventListener('resize', updateHeight);
    console.log(windowHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [windowHeight]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About Lynx</title>
        <meta name="description" content="About Lynx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} largeAvatar={false} />

      <div className="flex-grow relative">
        <BackgroundContainer>
          <div className="relative w-full h-1/2 mt-[100px] sm:mt-[200px]">
            <Image
              src="/images/temp.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent/0 to-white/100" />
          </div>
        </BackgroundContainer>

        <ContentContainer className="absolute inset-0 overflow-y-auto">
          <BackgroundContainer>
            <main className="relative w-full px-4 sm:px-6 md:px-8 pb-16">
              <div 
                className="relative ml-5 sm:ml-20 w-full z-10 mt-[100px] sm:mt-[200px] mx-auto max-w-7xl pt-16"
                style={{ minHeight: `${windowHeight*0.5}px` }}
              >
                <div className="w-full lg:w-3/5">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-800 dark:text-white transition-colors duration-300">
                    {t('about-title')}
                  </h1>
                  <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-10 text-sm sm:text-base text-zinc-600 dark:text-zinc-400" lang="en">
                    <div className="overflow-x-auto">
                      <span className="inline-block"><InlineMath lang='en' math="i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t)" /></span>
                    </div>
                    <p lang="zh">&ldquo;因我所起 与我所易 同我所历 如我所见&rdquo;</p>
                    <p lang="ja">「おとといは兎をみたの。昨日は鹿。今日はあなた」</p>
                    <p lang="zh">&ldquo;Best things come to those who wait&rdquo;</p>
                  </div>
                </div>
              </div>
            </main>
          </BackgroundContainer>
        </ContentContainer>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'], null, ['en', 'ja', 'zh'])),
    },
  }
}
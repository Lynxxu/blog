import Head from "next/head";
import Background from "./components/PersonalWeb/Background.jsx";
import Footer from "./components/footer.jsx";
import { useState, useEffect } from "react";
import Image from 'next/image';
import ArticleCard from './components/PersonalWeb/ArticleCards.jsx';
import Navigation from './components/PersonalWeb/Navigation.jsx';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
  const { t:tC } = useTranslation('articleCards');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const rotationClasses = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];

  return (
    <>
      <Head>
        <title>Lynx&apos;s Website</title>
        <meta name="description" content="Lynx&apos;s personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} largeAvatar={true} />
      <main className="relative mt-3">
        <div className="mx-auto max-w-full px-6 sm:px-6 lg:px-8 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            <h1 
              className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white transition-colors duration-300 sm:text-4xl md:text-5xl" Add this line
            >
              {t('title')}
            </h1>
            <p 
              className="mt-4 sm:mt-6 leading-[1.75rem] text-zinc-600 dark:text-zinc-300 transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: t('description') }}
            />
            <div className="flex justify-start mt-6 space-x-8 mb-10">
              <a href="https://x.com/1026Will" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/x-social-media-black-icon.svg"
                  alt="X (Twitter) Logo"
                  width={20}
                  height={20}
                  className="opacity-50 dark:invert transition-all duration-300 hover:opacity-80"
                />
              </a>
              <a href="mailto:lynxwill@proton.me">
                <Image
                  src="/images/email-svgrepo-com.svg"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="opacity-50 dark:invert transition-all duration-300 hover:opacity-80"
                />
              </a>
              <a href="https://github.com/Lynxxu" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/github-mark.svg"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                  className="opacity-50 dark:invert transition-all duration-300 hover:opacity-80"
                />
              </a>
            </div>
          </div>
          
        </div>
        <div className="relative overflow-hidden p-10">
          <div className="flex animate-carousel">
            {[...Array(24)].map((_, index) => (
              <div
                key={index}
                className={`drop-shadow-xl photo-item relative aspect-[7/10] w-32 sm:w-44 md:w-56 flex-none overflow-hidden rounded-sm sm:rounded-xl md:rounded-3xl hover:shadow-lg dark:hover:shadow-blue-400 transition-shadow duration-300 ${rotationClasses[index % 4]} mx-[10px]`}
                style={{
                  background: `linear-gradient(to bottom, var(--tw-bg-opacity-zinc-100) 0%, var(--tw-bg-opacity-zinc-100) 50%, transparent 50%, transparent 100%)`,
                }}
              >
                <Image
                  src={`/images/carousel/image ${(index % 12) + 1}.jpg`}
                  alt={`Carousel image ${(index % 12) + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  sizes="(max-width: 1080px) 520px, (max-width: 1080px) 520px, 520px"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-10 font-openSans">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col gap-6 lg:w-2/3">
              <ArticleCard
                title={tC('title-1')}
                description={tC('description-1')}
                date={tC('date-1')}
                link='#'
              />
              <ArticleCard
                title={tC('title-2')}
                description={tC('description-2')}
                date={tC('date-2')}
                link="#"
              />
            </div>
            <div className="w-full lg:w-1/3 justify-center items-center bg-transparent transition-colors duration-300 rounded-2xl p-5">
              <p className="text-black dark:text-white transition-colors duration-300 text-lg mb-4 italic text-right font-openSans">{t('legacy')} <a href="legacy" className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"> Visit</a></p>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-148%);
            }
          }
          .animate-carousel {
            animation: carousel 100s linear infinite;
          }
        `}
        </style>
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <Footer />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'articleCards'], null, ['en', 'ja', 'zh'])),
    },
  }
}




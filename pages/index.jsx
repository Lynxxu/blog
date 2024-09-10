import Head from "next/head";
import Background from "./components/PersonalWeb/Background.jsx";
import Footer from "./components/footer.jsx";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import ArticleCard from './components/ArticleCards.jsx';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [avatarSize, setAvatarSize] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      if (newWidth >= 640) { // sm breakpoint
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const navElement = document.getElementById('nav-container');
      if (navElement) {
        const navBottom = navElement.getBoundingClientRect().bottom;
        const scrollPercentage = Math.min(1, Math.max(0.3, window.scrollY / navBottom));
        const newSize = 70 - (20 * scrollPercentage);
        setAvatarSize(newSize);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Initialize dark mode based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const rotationClasses = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <Head>
        <title>Lynx&apos;s Website</title>
        <meta name="description" content="Lynx&apos;s personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <header className="relative">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="nav-container">
          <div className="pb-10 top-0" id="sticky-nav">
            <div className="sticky top-0" id="sticky-inner">
              <div id="nav-menu" className="flex justify-between items-center h-16 pt-10">
                <div className="sm:flex-1"></div>
                <div className="flex-1 flex justify-center">
                  <div className="hidden sm:flex space-x-4 bg-white dark:bg-zinc-800 shadow-md rounded-full px-4 py-1 transition-colors duration-300">
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</a>
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Articles</a>
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Projects</a>
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Uses</a>
                  </div>
                </div>
                <div className="flex-1 flex justify-end sm:justify-center items-center space-x-4">
                  <div className="flex sm:hidden">
                    <button 
                      className="bg-white dark:bg-zinc-800 shadow-md rounded-full px-4 py-2 flex items-center transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      <span className="text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-colors duration-300">Menu</span>
                      <svg className="ml-2 w-4 h-4 text-zinc-800 dark:text-zinc-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                  <div 
                    className=" transition-all bg-white dark:bg-zinc-800 duration-50 relative p-1 px-2 border-[1px] hover:border-zinc-200 border-zinc-100 dark:border-zinc-800 hover:drop-shadow-md drop-shadow-sm rounded-full group cursor-pointer"
                    onClick={toggleDarkMode}
                  >
                    <Image
                      src="/images/sun.svg"
                      alt="Sun Icon"
                      width={24}
                      height={24}
                      className={`w-6 h-6 sm:w-6 sm:h-6 opacity-60 animate-spin-slow group-hover:opacity-100 transition-opacity duration-100 ${isDarkMode ? 'hidden' : ''}`}
                    />
                    <Image
                      src="/images/half-moon.svg"
                      alt="Moon Icon"
                      width={24}
                      height={24}
                      className={` w-6 h-6 sm:w-6 sm:h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-100 ${isDarkMode ? '' : 'hidden'}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl pt-10 px-4 sm:px-6 lg:px-8">
              <Image 
                src="/images/avatar.jpg" 
                alt="Description" 
                className="rounded-full sticky z-50 hover:shadow-xl"  
                width={avatarSize} 
                height={avatarSize}
                style={{ width: `${avatarSize}px`, height: `${avatarSize}px`, transition: 'width 0.1s, height 0.1s' }}
              />
            </div>
          </div>
        </nav>
      </header>
      <div className={`fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          ref={menuRef} 
          className={`bg-white dark:bg-zinc-800 rounded-lg p-8 mt-5 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}
          style={{ width: `${windowWidth * 0.8}px`, maxWidth: '400px' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-base text-zinc-800 dark:text-zinc-200">Directory</h2>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">About</a>
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">Articles</a>
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">Projects</a>
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">Uses</a>
          </div>
        </div>
      </div>
      
      <main className={`relative mt-3 ${isMenuOpen ? 'blur-sm' : ''}`}>
        <div className="mx-auto max-w-full px-6 sm:px-6 lg:px-8 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white transition-colors duration-300 sm:text-4xl md:text-5xl">
              Chronic overthinker, ACG enthusiast, cringy adult.
            </h1>
            <p className="mt-4 sm:mt-6 leading-[1.75rem] text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              I&apos;m Lynx, a chemisty graduate looking for a job at the moment. I&apos;m a introvert, a beyond-average ACG fan, and a <span className='italic'>Mikka Bouzu</span>. This is simply a personal website built for fun as I&apos;m busy being unemployed. I will upload articles to this website about almost anything from cringy night thougths to serious Japanese grammar.
            </p>
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
                title="Streamlining language learning process with anki: Japanese as an example"
                description="If you are cramming vocabularies from textbooks and memorizing them by pure repeititon without any understanding of the word, you might be intreseted in this article, where I share with you my vocabulary mining process from immersive experience like anime."
                date="August 10, 2024"
                link="#"
              />
              <ArticleCard
                title="Anki: The most powerful language learning tool you can find - AND IT&apos;S FREE"
                description="Learning an language and trying to memorize vocabularies? Trying to study for some memorization heavy subjects? Let me introduce you to the open-source flashcard app called Anki. You'll thank me later ."
                date="September 15, 2024"
                link="#"
              />
            </div>
            <div className="w-full lg:w-1/3 justify-center items-center bg-transparent transition-colors duration-300 rounded-2xl p-5">
              <p className="text-black dark:text-white transition-colors duration-300 text-lg mb-4 italic text-right font-openSans">Interested in my legacy site? <a href="legacy" className="text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"> Visit</a></p>
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




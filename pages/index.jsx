import Head from "next/head";
import Background from "./components/PersonalWeb/Background.jsx";
import ImageHeaderFull from "./components/ImageStyle.jsx";
import { ImageHeaderHalf } from "./components/ImageHeaderHalf.jsx";
import NavBar from "./components/navbar.jsx";
import HomePageContent from "./components/ContentDiv.jsx";
import Footer from "./components/footer.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [avatarSize, setAvatarSize] = useState(50);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
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

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotationAngles = [-2, 2, -1, 1];

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
            <div className="sticky top-0 bg-white z-10" id="sticky-inner">
              <div className="flex justify-center items-center h-16 pt-10 ">
                <div className="flex space-x-4 bg-white shadow-md rounded-full px-4 py-1">
                  <a href="#" className="text-zinc-800 hover:text-zinc-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="#" className="text-zinc-800 hover:text-zinc-600 px-3 py-2 rounded-md text-sm font-medium">Articles</a>
                  <a href="#" className="text-zinc-800 hover:text-zinc-600 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                  <a href="#" className="text-zinc-800 hover:text-zinc-600 px-3 py-2 rounded-md text-sm font-medium">Uses</a>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl pt-10">
              <Image 
                src="/images/avatar.jpg" 
                alt="Description" 
                className="rounded-full sticky z-50"  
                width={avatarSize} 
                height={avatarSize}
                style={{ width: `${avatarSize}px`, height: `${avatarSize}px`, transition: 'width 0.1s, height 0.1s' }}
              />
            </div>
          </div>
        </nav>
      </header>

      <main className="relative mt-3">
        <div className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl md:text-5xl">
              Chronic overthinker, ACG enthusiast, cringy adult.
            </h1>
            <p className="mt-4 sm:mt-6 leading-[1.75rem] text-zinc-600">
              I&apos;m Lynx, a chemisty graduate looking for a job at the moment. I&apos;m a introvert, a beyond-average ACG fan, and a <span className='italic'>Mikka Bouzu</span>. This is simply a personal website built for fun as I&apos;m busy being unemployed. I will upload articles to this website about almost anything from cringy night thougths to serious Japanese grammar.
            </p>
            <div className="flex justify-start mt-6 space-x-8">
              <a href="https://x.com/1026Will" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/x-social-media-black-icon.svg"
                  alt="X (Twitter) Logo"
                  width={20}
                  height={20}
                  className="opacity-50"
                />
              </a>
              <a href="mailto:lynxwill@proton.me">
                <Image
                  src="/images/email-svgrepo-com.svg"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="opacity-50"
                />
              </a>
              <a href="https://github.com/Lynxxu" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/github-mark.svg"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                  className="opacity-50"
                />
              </a>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
              {/* Add your content sections here */}
              {/* For example: Recent Articles, Featured Projects, etc. */}
            </div>
          </div>
        </div>
        
        <div className="relative z-50  overflow-hidden p-10">
          <div className="flex animate-carousel">
            {[...Array(24)].map((_, index) => (
              <div
                key={index}
                className={`drop-shadow-xl photo-item relative aspect-[9/8] w-32 sm:w-44 md:w-56 flex-none overflow-hidden rounded-sm sm:rounded-xl md:rounded-3xl border border-gray-400 bg-zinc-100 dark:bg-zinc-800 hover:shadow-lg transition-shadow duration-300 rotate-${rotationAngles[index % rotationAngles.length]} mx-[10px]`}
              >
                <Image
                  src={`/images/carousel/image${(index % 12) + 1}.jpg`}
                  alt={`Carousel image ${(index % 12) + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 224px"
                />
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-carousel {
            animation: carousel 120s linear infinite;
          }
        `}</style>
        
        <div className="h-[2000px] w-full" aria-hidden="true"></div>
      </main>
      <Footer />
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Navigation({ isDarkMode, toggleDarkMode, largeAvatar }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  const [avatarSize, setAvatarSize] = useState(64);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      if (newWidth >= 640) { 
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (largeAvatar) {
        const navElement = document.getElementById('nav-container');
        if (navElement) {
          const navBottom = navElement.getBoundingClientRect().bottom;
          const scrollPercentage = Math.min(1, Math.max(0.3, window.scrollY / navBottom));
          const newSize = 70 - (20 * scrollPercentage);
          setAvatarSize(newSize);
        }
      } else {
        setAvatarSize(40); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target) && !event.target.closest('.language-icon')) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [largeAvatar]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (newLanguage) => {
    router.push(router.pathname, router.asPath, { locale: newLanguage });
    setIsLanguageMenuOpen(false); // Close the menu after selection
  };


  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="nav-container">
        <div className={`pb-10 top-0 ${!largeAvatar ? 'mb-24' : ''}`} id="sticky-nav">
          <div className="sticky top-0" id="sticky-inner">
            <div id="nav-menu" className="flex justify-between items-center h-16 pt-10">
              <div className={`sm:flex-1 sm: ${largeAvatar ? '' : 'flex items-center'} `}>
                {!largeAvatar && (
                  <Link href="/">
                    <Image 
                      src="/images/avatar.jpg" 
                      alt="Description" 
                      className="rounded-full md:ml-40 sm:ml-10 "  
                      width={40} 
                      height={40}
                    />
                  </Link>
                )}
              </div>
              <div className="sm:flex-1 sm:flex justify-center">
                <div className="min-w-[300px] hidden sm:flex space-x-4 bg-white dark:bg-zinc-800 shadow-md rounded-full px-4 py-1 transition-colors duration-300">
                  <a href="../../posts/about" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('about')}</a>
                  <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('articles')}</a>
                  <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('projects')}</a>
                  <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">{t('uses')}</a>
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
                  className="transition-all bg-white dark:bg-zinc-800 duration-50 relative p-1 px-2 border-[1px] hover:border-zinc-200 border-zinc-100 dark:border-zinc-800 hover:drop-shadow-md drop-shadow-sm rounded-full group cursor-pointer"
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
                    className={`w-6 h-6 sm:w-6 sm:h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-100 ${isDarkMode ? '' : 'hidden'}`}
                  />
                </div>
                <div className="cursor-pointer relative">
                  <Image
                    src="/images/LanguageIcon.svg"
                    alt="Language Icon"
                    width={24}
                    height={24}
                    className={`w-6 h-6 sm:w-6 sm:h-6 opacity-60 hover:opacity-100 transition-opacity duration-100 ${isDarkMode ? 'invert' : ''} language-icon`}
                    onClick={toggleLanguageMenu}
                  />
                  <div 
                    ref={languageMenuRef}
                    className={`absolute mt-5 opacity-100 right-0 w-40 bg-white dark:bg-zinc-800 rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                      isLanguageMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-100'
                    }`}
                  >
                    <div className="py-1" >
                      <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700">English</button>
                      <button onClick={() => changeLanguage('zh')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700">简体中文</button>
                      <button onClick={() => changeLanguage('ja')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700">日本語</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {largeAvatar && (
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
          )}
        </div>
      </nav>
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
            <a href="../../posts/about" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">{t('about')}</a>
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">{t('articles')}</a>
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">{t('projects')}</a>
            <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 py-2 text-sm font-medium transition-colors duration-300">{t('uses')}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
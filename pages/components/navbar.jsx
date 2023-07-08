import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  useEffect(() => {
    const navBar = document.getElementById("navBar");
    const headerLogo = document.getElementById("headerLogo");

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > window.innerHeight) {
        navBar.classList.add("bg-prana-white");
        headerLogo.classList.add("invert");
      } else {
        navBar.classList.remove("bg-prana-white");
        headerLogo.classList.remove("invert");
      }
    });
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleTextColorChange() {
      let navLinks = document.getElementById("navLinks");
      if (document.documentElement.scrollTop > window.innerHeight && navLinks) {
        navLinks.classList.add("text-black");
      } else if (navLinks) {
        navLinks.classList.remove("text-black");
      }
    }

    setWindowWidth(window.innerWidth);

    if (windowWidth > 800) {
      window.addEventListener("scroll", handleTextColorChange);
      handleTextColorChange();
    } else {
      window.removeEventListener("scroll", handleTextColorChange);
    }

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);

  return (
    <header
      className="fixed z-10 w-full bg-transparent p-3 text-white shadow-lg backdrop-blur-lg "
      style={{ transition: "all 0.5s" }}
      id="navBar"
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="www.lynx0922.com">
          <Image
            src={`/images/Logo-eye-white.png`}
            width={30}
            height={30}
            className=""
            alt="Logo of a Lynx's eye"
            id="headerLogo"
          />
        </Link>
        {windowWidth > 800 ? (
          <div className="column-gap-10 flex font-medium" id="navLinks">
            <Link href="www.lynx0922.com" className="mx-4 text-sm ">
              Travel
            </Link>
            <Link href="www.lynx0922.com" className="mx-4 text-sm">
              Coding
            </Link>
            <Link href="www.lynx0922.com" className="mx-4 text-sm">
              Games
            </Link>
            <Link href="www.lynx0922.com" className="mx-4 text-sm">
              About
            </Link>
          </div>
        ) : (
          <button type="button">
            <svg viewBox="0 0 80 70" width="20" height="15">
              <rect width="80" height="10"></rect>
              <rect y="30" width="80" height="10"></rect>
              <rect y="60" width="80" height="10"></rect>
            </svg>
          </button>
        )}
      </nav>
    </header>
  );
}

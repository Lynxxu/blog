import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  useEffect(() => {
    const navBar = document.getElementById("navBar");
    const headerLogo = document.getElementById("headerLogo");

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > window.innerHeight) {
        navBar.classList.remove("bg-transparent");
        navBar.classList.add("bg-prana-white");
        headerLogo.classList.add("invert");
      } else {
        navBar.classList.remove("bg-prana-white");
        navBar.classList.add("bg-transparent");
        headerLogo.classList.remove("invert");
      }
    });
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleMenuColorChange() {
      const hamburgerSvg = document.getElementById("hamburgerSvg");
      if (
        document.documentElement.scrollTop > window.innerHeight &&
        hamburgerSvg
      ) {
        hamburgerSvg.setAttribute("color", "black");
      } else if (hamburgerSvg) {
        hamburgerSvg.removeAttribute("color", "black");
      }
    }

    function handleTextColorChange() {
      const navLinks = document.getElementById("navLinks");
      if (document.documentElement.scrollTop > window.innerHeight && navLinks) {
        navLinks.classList.add("text-black");
      } else if (navLinks) {
        navLinks.classList.remove("text-black");
      }
    }

    setWindowWidth(window.innerWidth);

    if (windowWidth > 800) {
      window.addEventListener("scroll", handleTextColorChange);
      window.removeEventListener("scroll", handleMenuColorChange);
      handleTextColorChange();
    } else {
      window.removeEventListener("scroll", handleTextColorChange);
      handleMenuColorChange();
      window.addEventListener("scroll", handleMenuColorChange);
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

  const [isOpen, setIsOpen] = useState(false);

  function SideBar() {
    function handleCloseSideBar() {
      const mask = document.getElementById("sideBarMask");
      mask.classList.replace("animate-fade-in", "animate-fade-out");
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 500);
    }
    return (
      <div id="sideBar">
        <div
          className="fixed z-20 block h-screen w-full animate-fade-in bg-black opacity-80"
          onClick={() => handleCloseSideBar()}
          id="sideBarMask"
        ></div>
        <div className="fixed right-0 z-30 h-screen w-2/3 bg-white"></div>
      </div>
    );
  }

  return (
    <>
      {isOpen && <SideBar />}
      <header
        className="fixed z-10 w-full bg-transparent p-3 text-white shadow-lg backdrop-blur-lg "
        style={{ transition: "all 1s" }}
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
            <button
              type="button"
              onClick={() => {
                console.log(isOpen);
                setIsOpen(!isOpen);
              }}
            >
              <svg
                viewBox="0 0 80 70"
                width="20"
                height="15"
                color="prana-white"
                id="hamburgerSvg"
              >
                <rect width="80" height="10" fill="currentColor"></rect>
                <rect y="30" width="80" height="10" fill="currentColor"></rect>
                <rect y="60" width="80" height="10" fill="currentColor"></rect>
              </svg>
            </button>
          )}
        </nav>
      </header>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function SideBarBlogData() {
  function SideBarBlogDataInfo({ href, title, number }) {
    return (
      <Link
        href={href}
        className="m-3 flex flex-col items-center justify-center text-center"
      >
        <div className="font-serif font-light">{title}</div>
        <div className="font-serif font-light italic">{number}</div>
      </Link>
    );
  }
  return (
    <div id="sideBarBlogData" className="mt-2 flex items-center justify-center">
      <SideBarBlogDataInfo href={"#"} title={"Articles"} number={"45"} />
      <SideBarBlogDataInfo href={"#"} title={"Tags"} number={"99"} />
      <SideBarBlogDataInfo href={"#"} title={"Topics"} number={"7"} />
    </div>
  );
}

function SideBarDirectories() {
  function SingleDirectory({ href, title }) {
    return (
      <Link href={href} className="px-2 py-3 font-serif">
        {title}
      </Link>
    );
  }

  return (
    <div id="sideBarDirectories" className="m-6 flex flex-col justify-center">
      <SingleDirectory href={"#"} title={"Home"} />
      <SingleDirectory href={"#"} title={"Coding"} />
      <SingleDirectory href={"#"} title={"Games"} />
      <SingleDirectory href={"#"} title={"Archives"} />
      <SingleDirectory href={"#"} title={"About"} />
    </div>
  );
}

function SideBar({ isOpen, handleCloseSideBar }) {
  useEffect(() => {
    // This effect is necessary to avoid unnecessary re-render
    if (isOpen) {
      setTimeout(() => {
        let navbar = document.getElementById("navBar");
        const sideBarMenu = document.getElementById("sideBarMenu");
        sideBarMenu.style.setProperty("translate", "-100%");
        sideBarMenu.style.setProperty("transition-duration", "500ms");
        navbar.classList.add("opacity-0");
      }, 0);
    }
  }, [isOpen]);

  return (
    <div id="sideBar">
      <div
        className="fixed z-30 block h-screen w-full animate-fade-in bg-black opacity-80"
        onClick={() => handleCloseSideBar()}
        id="sideBarMask"
      ></div>
      <div
        className="fixed right-[-250px] z-30 flex h-screen w-[250px] flex-col bg-white transition-all"
        id="sideBarMenu"
      >
        <div id="sideBarAvatar" className="mx-auto mt-10">
          <Image
            src={"/images/Logo-Con.png"}
            width={120}
            height={120}
            alt="A Lynx constellation Logo"
            className="p-1"
          ></Image>
        </div>
        <SideBarBlogData />
        <hr className="hr divide-y-1 w-full" />
        <SideBarDirectories />
      </div>
    </div>
  );
}

export default function NavBar({ scrollModifier = 1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseSideBar = useCallback(() => {
    let navbar = document.getElementById("navBar");
    const mask = document.getElementById("sideBarMask");
    const sideBarMenu = document.getElementById("sideBarMenu");
    mask.classList.replace("animate-fade-in", "animate-fade-out");
    sideBarMenu.style.removeProperty("translate");
    navbar.classList.remove("opacity-0");
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 500);
  }, [isOpen]);

  useEffect(() => {
    // This Effect changes the color of navBar and logo
    const navBar = document.getElementById("navBar");
    const headerLogo = document.getElementById("headerLogo");

    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop >
        window.innerHeight / scrollModifier
      ) {
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
    // This effect changes color of text and menu(if in mobile display)
    function handleMenuColorChange() {
      const hamburgerSvg = document.getElementById("hamburgerSvg");
      if (
        document.documentElement.scrollTop >
          window.innerHeight / scrollModifier &&
        hamburgerSvg
      ) {
        hamburgerSvg.setAttribute("color", "black");
      } else if (hamburgerSvg) {
        hamburgerSvg.removeAttribute("color", "black");
      }
    }

    function handleTextColorChange() {
      const navLinks = document.getElementById("navLinks");
      if (
        document.documentElement.scrollTop >
          window.innerHeight / scrollModifier &&
        navLinks
      ) {
        navLinks.classList.add("text-black");
      } else if (navLinks) {
        navLinks.classList.remove("text-black");
      }
    }

    setWindowWidth(window.innerWidth);

    if (windowWidth > 800) {
      window.addEventListener("scroll", handleTextColorChange);
      window.removeEventListener("scroll", handleMenuColorChange);
      if (isOpen) {
        handleCloseSideBar();
      }
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
  }, [windowWidth, isOpen, handleCloseSideBar, scrollModifier]);

  return (
    <>
      {isOpen && (
        <SideBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleCloseSideBar={handleCloseSideBar}
        />
      )}
      <header
        className="fixed z-40 w-full bg-transparent p-3 text-white shadow-lg backdrop-blur-lg "
        style={{ transition: "all 1s" }}
        id="navBar"
      >
        <nav className="container mx-auto flex items-center justify-between">
          <Link href="#">
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

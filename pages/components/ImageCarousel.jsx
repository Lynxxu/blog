import Image from "next/image";
import { DarkenedLayer, getLocalCursorPosition } from "./ImageStyle.jsx";
import { useEffect, useState } from "react";
import styles from "../../styles/Components/themes.module.css";

export default function ImageCarousel() {
  let imageIndex = 0;
  useEffect(() => {
    const ELEMENTS = document.querySelectorAll(".ripple-effects");
    const ELEMENTS_SPAN = [];

    ELEMENTS.forEach((element, index) => {
      // Elements that contain the "FLASH" class, add a listener to remove
      // animation-class when the animation ends

      element.addEventListener("animationend", (e) => {
        element.classList.remove(ANIMATEDCLASSNAME);
      });

      // If The span element for this element does not exist in the array, add it.
      if (!ELEMENTS_SPAN[index]) {
        ELEMENTS_SPAN[index] = element.querySelector("span");
      }

      element.addEventListener("mouseover", (e) => {
        let { x, y } = getLocalCursorPosition(e);
        ELEMENTS_SPAN[index].style.left = x + "px";
        ELEMENTS_SPAN[index].style.top = y + "px";
      });

      element.addEventListener("mouseout", (e) => {
        let { x, y } = getLocalCursorPosition(e);
        ELEMENTS_SPAN[index].style.left = x + "px";
        ELEMENTS_SPAN[index].style.top = y + "px";
      });
    });
  });

  function handleChangeImage(arrowDirection) {
    const buttonLeft = document.getElementById("carousel-button-left");
    const buttonRight = document.getElementById("carousel-button-right");
    let currentBackImage = document.getElementById(
      `CarouselBackImage-` + imageIndex
    );

    let currentFrontImage = document.getElementById(
      `CarouselFrontImage-` + imageIndex
    );

    currentBackImage.classList.remove("opacity-100", "transition-opacity");
    currentFrontImage.classList.remove("opacity-100", "transition-opacity");

    if (arrowDirection === "left") {
      if (imageIndex === 0) {
        imageIndex = 2;
      } else {
        imageIndex -= 1;
      }
    }
    if (arrowDirection === "right") {
      if (imageIndex === 2) {
        imageIndex = 0;
      } else {
        imageIndex += 1;
      }
    }

    let nextBackImage = document.getElementById(
      `CarouselBackImage-` + imageIndex
    );
    let nextFrontImage = document.getElementById(
      `CarouselFrontImage-` + imageIndex
    );

    nextBackImage.classList.add("opacity-100");
    nextFrontImage.classList.add("opacity-100");

    setTimeout(() => {
      nextBackImage.classList.add("transition-opacity");
    }, 300);

    buttonLeft.setAttribute("disabled", true);
    buttonRight.setAttribute("disabled", true);
    setTimeout(() => {
      buttonLeft.removeAttribute("disabled");
      buttonRight.removeAttribute("disabled");
    }, 800);
  }

  const imageArray = [
    "/images/Fushimi-inari-taisha.jpg",
    "/images/KON-table.jpg",
    "/images/ToyosatoStation.jpg",
  ];

  return (
    <>
      <DarkenedLayer />
      <div id="carousel-background" className="absolute h-[100vh] w-full">
        <Image
          priority={true}
          src={imageArray[0]}
          width={1500}
          height={1000}
          alt="images for articles"
          id="CarouselBackImage-0"
          className={`absolute inset-0 z-10 h-[100vh] w-full object-cover opacity-0 opacity-100 transition-opacity`}
          style={{ transitionDuration: "1000ms" }}
        />

        <Image
          src={imageArray[1]}
          width={1500}
          height={1000}
          alt="images for articles"
          id="CarouselBackImage-1"
          className={`absolute inset-0 z-10 h-[100vh] w-full object-cover opacity-0 `}
          style={{ transitionDuration: "1000ms" }}
        />

        <Image
          src={imageArray[2]}
          width={1500}
          height={1000}
          alt="images for articles"
          id="CarouselBackImage-2"
          className={`absolute inset-0 z-10 h-[100vh] w-full object-cover opacity-0`}
          style={{ transitionDuration: "1000ms" }}
        />
      </div>
      <div
        id="carousel-front"
        className="container relative z-20 m-auto h-[100vh]"
      >
        <div id="carousel-buttons" className="hidden 2xl:block">
          <button
            id="carousel-button-left"
            className="HOVER ripple-effects absolute left-[80px] top-[50%] rounded-lg border border-white p-2 px-3 text-2xl text-white active:border-black"
            onClick={() => handleChangeImage("left")}
          >
            <text>&#8656;</text>
            <span></span>
          </button>
          <button
            id="carousel-button-right"
            className="HOVER ripple-effects absolute right-[80px] top-[50%] rounded-lg border border-white p-2 px-3 text-2xl text-white active:border-black"
            onClick={() => {
              handleChangeImage("right");
            }}
          >
            <text>&#8658;</text>
            <span></span>
          </button>
        </div>
        <Image
          src={imageArray[0]}
          width={1200}
          height={1000}
          alt="images for articles"
          id="CarouselFrontImage-0"
          className={`absolute inset-0 m-auto object-cover opacity-0 opacity-100`}
          style={{ transitionDuration: "300ms" }}
        />
        <Image
          src={imageArray[1]}
          width={1200}
          height={1000}
          alt="images for articles"
          id="CarouselFrontImage-1"
          className={`absolute inset-0 m-auto object-cover opacity-0`}
          style={{ transitionDuration: "300ms" }}
        />
        <Image
          src={imageArray[2]}
          width={1200}
          height={1000}
          alt="images for articles"
          id="CarouselFrontImage-2"
          className={`absolute inset-0 m-auto object-cover opacity-0`}
          style={{ transitionDuration: "300ms" }}
        />
      </div>
    </>
  );
}

import Image from "next/image";
import { DarkenedLayer, getLocalCursorPosition } from "./ImageStyle.jsx";
import { useEffect, useState } from "react";
import styles from "../../styles/Components/themes.module.css";

// export default function ImageCarousel() {
//   useEffect(() => {
//     const CarouselFrontImage = document.getElementById("CarouselFrontImage");
//     const CarouselBackground = document.getElementById("CarouselBackground");
//   });

//   const imageArray = [
//     "/images/Fushimi-inari-taisha.jpg",
//     "/images/KON-table.jpg",
//     "/images/ToyosatoStation.jpg",
//   ];

//   const [imageIndex, setImageIndex] = useState(0);

//   function handleChangeImageLeft() {
//     CarouselFrontImage.classList.remove("opacity-100");
//     CarouselFrontImage.classList.add("opacity-0");
//     setTimeout(() => {
//       if (imageIndex > 0) {
//         setImageIndex(imageIndex - 1);
//       } else if (imageIndex == 0) {
//         setImageIndex(2);
//       }
//       CarouselFrontImage.classList.remove("opacity-0");
//       CarouselFrontImage.classList.add("opacity-100");
//     }, 1000);
//   }

//   function handleChangeImageRight() {
//     CarouselFrontImage.classList.remove("opacity-100");
//     CarouselFrontImage.classList.add("opacity-0");
//     setTimeout(() => {
//       if (imageIndex < 2) {
//         setImageIndex(imageIndex + 1);
//       } else if (imageIndex == 2) {
//         setImageIndex(0);
//       }
//       CarouselFrontImage.classList.remove("opacity-0");
//       CarouselFrontImage.classList.add("opacity-100");
//     }, 500);
//   }

//   return (
//     <div
//       id="CarouselBackground"
//       className="relative my-auto flex h-full w-full items-center justify-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url(${imageArray[imageIndex]})`,
//         transition: "opacity 1s ease-in-out",
//       }}
//     >
//       <DarkenedLayer />
//       <button
//         id="carouselLeftButton"
//         className="z-10 text-white"
//         onClick={handleChangeImageLeft}
//       >
//         &lt;
//       </button>
//       <Image
//         src={imageArray[imageIndex]}
//         width={1500}
//         height={1500}
//         alt="images for articles"
//         id="CarouselFrontImage"
//         className={`container z-10 my-40 px-10`}
//         style={{
//           transition: "opacity 500ms ease-in-out",
//           transitionDelay: "0ms",
//         }}
//       />
//       <button
//         id="carouselRightButton"
//         className="z-10 text-white"
//         onClick={handleChangeImageRight}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// }

// export default function ImageCarousel() {
//   useEffect(() => {
//     const CarouselFrontImage = document.getElementById("CarouselFrontImage");
//     const CarouselBackground = document.getElementById("CarouselBackground");
//   });

//   const imageArray = [
//     "/images/Fushimi-inari-taisha.jpg",
//     "/images/KON-table.jpg",
//     "/images/ToyosatoStation.jpg",
//   ];

//   const [imageIndex, setImageIndex] = useState(0);

//   function handleChangeImageLeft() {
//     CarouselFrontImage.classList.remove("opacity-100");
//     CarouselFrontImage.classList.add("opacity-0");
//     setTimeout(() => {
//       if (imageIndex > 0) {
//         setImageIndex(imageIndex - 1);
//       } else if (imageIndex == 0) {
//         setImageIndex(2);
//       }
//       CarouselFrontImage.classList.remove("opacity-0");
//       CarouselFrontImage.classList.add("opacity-100");
//     }, 1000);
//   }

//   function handleChangeImageRight() {
//     CarouselFrontImage.classList.remove("opacity-100");
//     CarouselFrontImage.classList.add("opacity-0");
//     setTimeout(() => {
//       if (imageIndex < 2) {
//         setImageIndex(imageIndex + 1);
//       } else if (imageIndex == 2) {
//         setImageIndex(0);
//       }
//       CarouselFrontImage.classList.remove("opacity-0");
//       CarouselFrontImage.classList.add("opacity-100");
//     }, 1000);
//   }

//   return (
//     <div
//       id="CarouselBackground"
//       className="image-transition relative my-auto flex h-full w-full items-center justify-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url(${imageArray[imageIndex]})`,
//         transition: "opacity 1s ease-in-out",
//       }}
//     >
//       <Image
//         src={imageArray[imageIndex]}
//         width={1500}
//         height={1500}
//         alt="images for articles"
//         id="CarouselFrontImage"
//         className={`container absolute z-10 my-40 px-10`}
//         style={{ transition: "all 1s ease-in-out" }}
//       />
//       <Image
//         src={imageArray[imageIndex]}
//         width={1500}
//         height={1500}
//         alt="images for articles"
//         id="CarouselFrontImage"
//         className={`container absolute z-10 my-40 px-10`}
//         style={{ transition: "all 1s ease-in-out" }}
//       />
//       <Image
//         src={imageArray[imageIndex]}
//         width={1500}
//         height={1500}
//         alt="images for articles"
//         id="CarouselFrontImage"
//         className={`container z-10 my-40 px-10`}
//         style={{ transition: "all 1s ease-in-out" }}
//       />
//       <DarkenedLayer />
//       <button
//         id="carouselLeftButton"
//         className="z-10 text-white"
//         onClick={handleChangeImageLeft}
//       >
//         &lt;
//       </button>
//       <button
//         id="carouselRightButton"
//         className="z-10 text-white"
//         onClick={handleChangeImageRight}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// }

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

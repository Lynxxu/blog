import Image from "next/image";
import { DarkenedLayer } from "./ImageStyle.jsx";
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
  function handleChangeImageLeft() {
    let currentImage = document.getElementById(
      `CarouselFrontImage-` + imageIndex
    );

    currentImage.classList.remove("opacity-100");
    setTimeout(
      (() => {
        currentImage.classList.remove("transition-opacity");
      },
      0)
    );

    console.log(imageIndex);
    if (imageIndex === 0) {
      imageIndex = 2;
    } else {
      imageIndex -= 1;
    }

    document
      .getElementById(`CarouselFrontImage-` + imageIndex)
      .classList.add("opacity-100", "transition-opacity");
    console.log(imageIndex);
  }

  const imageArray = [
    "/images/Fushimi-inari-taisha.jpg",
    "/images/KON-table.jpg",
    "/images/ToyosatoStation.jpg",
  ];

  return (
    <div id="Inner-carousel" className="relative h-full w-full">
      <button
        id="carousel-button-left"
        className="absolute left-1 top-[50%] z-40"
        onClick={handleChangeImageLeft}
      >
        &#8656;
      </button>
      <button
        id="carousel-button-right"
        className="absolute right-1 top-[50%] z-40"
      >
        &#8658;
      </button>

      <Image
        priority={true}
        src={imageArray[0]}
        width={1500}
        height={1500}
        alt="images for articles"
        id="CarouselFrontImage-0"
        className={`relative inset-0 z-10 w-full bg-cover opacity-0 opacity-100 transition-opacity`}
        style={{ transitionDuration: "500ms" }}
      />

      <Image
        src={imageArray[1]}
        width={1500}
        height={1500}
        alt="images for articles"
        id="CarouselFrontImage-1"
        className={`absolute inset-0 z-10 w-full bg-cover opacity-0 `}
        style={{ transitionDuration: "500ms" }}
      />

      <Image
        src={imageArray[2]}
        width={1500}
        height={1500}
        alt="images for articles"
        id="CarouselFrontImage-2"
        className={`absolute inset-0 z-10 w-full bg-cover opacity-0`}
        style={{ transitionDuration: "500ms" }}
      />
    </div>
  );
}

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

// export default function ImageCarousel() {
//   useEffect(() => {
//     const CurrentCarouselFrontImage = document.getElementById(
//       "CurrentCarouselFrontImage"
//     );
//     const PrevCarouselFrontImage = document.getElementById(
//       "PrevCarouselFrontImage"
//     );
//     const CarouselBackground = document.getElementById("CarouselBackground");
//   });

//   const imageArray = [
//     "/images/Fushimi-inari-taisha.jpg",
//     "/images/KON-table.jpg",
//     "/images/ToyosatoStation.jpg",
//   ];

//   const [imageIndex, setImageIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   function handleChangeImageLeft() {
//     setPrevIndex(imageIndex);
//     setTimeout(() => {
//       if (imageIndex > 0) {
//         setImageIndex(imageIndex - 1);
//       } else if (imageIndex == 0) {
//         setImageIndex(2);
//       }
//     }, 1000);
//   }

//   function handleChangeImageRight() {
//     setPrevIndex(imageIndex);
//     setTimeout(() => {
//       if (imageIndex < 2) {
//         setImageIndex(imageIndex + 1);
//       } else if (imageIndex == 2) {
//         setImageIndex(0);
//       }
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
//         id="CurrentCarouselFrontImage"
//         className={`container absolute z-20 my-40 px-10`}
//         style={{ transition: "all 1s ease-in-out" }}
//       />

//       <Image
//         src={imageArray[prevIndex]}
//         width={1500}
//         height={1500}
//         alt="images for articles"
//         id="PrevCarouselFrontImage"
//         className={`container z-10 my-40 px-10`}
//         style={{ transition: "all 1s ease-in-out" }}
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

export default function ImageCarousel() {
  useEffect(() => {
    const CarouselFrontImage = document.getElementById("CarouselFrontImage");
    const CarouselBackground = document.getElementById("CarouselBackground");
  });

  const imageArray = [
    "/images/Fushimi-inari-taisha.jpg",
    "/images/KON-table.jpg",
    "/images/ToyosatoStation.jpg",
  ];

  const [imageIndex, setImageIndex] = useState(0);

  function handleChangeImageLeft() {
    CarouselFrontImage.classList.remove("opacity-100");
    CarouselFrontImage.classList.add("opacity-0");
    setTimeout(() => {
      if (imageIndex > 0) {
        setImageIndex(imageIndex - 1);
      } else if (imageIndex == 0) {
        setImageIndex(2);
      }
      CarouselFrontImage.classList.remove("opacity-0");
      CarouselFrontImage.classList.add("opacity-100");
    }, 1000);
  }

  function handleChangeImageRight() {
    CarouselFrontImage.classList.remove("opacity-100");
    CarouselFrontImage.classList.add("opacity-0");
    setTimeout(() => {
      if (imageIndex < 2) {
        setImageIndex(imageIndex + 1);
      } else if (imageIndex == 2) {
        setImageIndex(0);
      }
      CarouselFrontImage.classList.remove("opacity-0");
      CarouselFrontImage.classList.add("opacity-100");
    }, 500);
  }

  return (
    <div
      id="CarouselBackground"
      className="relative my-auto flex h-full w-full items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${imageArray[imageIndex]})`,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <DarkenedLayer />
      <button
        id="carouselLeftButton"
        className="z-10 text-white"
        onClick={handleChangeImageLeft}
      >
        &lt;
      </button>
      <Image
        src={imageArray[imageIndex]}
        width={1500}
        height={1500}
        alt="images for articles"
        id="CarouselFrontImage"
        className={`container z-10 my-40 px-10`}
        style={{
          transition: "opacity 500ms ease-in-out",
          transitionDelay: "0ms",
        }}
      />
      <button
        id="carouselRightButton"
        className="z-10 text-white"
        onClick={handleChangeImageRight}
      >
        &gt;
      </button>
    </div>
  );
}

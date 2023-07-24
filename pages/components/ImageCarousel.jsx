import Image from "next/image";
import { DarkenedLayer } from "./ImageStyle.jsx";
import { useState } from "react";

export default function ImageCarousel() {
  const imageArray = [
    "/images/Fushimi-inari-taisha.jpg",
    "/images/KON-table.jpg",
    "/images/ToyosatoStation.jpg",
  ];

  const [imageIndex, setImageIndex] = useState(1);

  function handleChangeImageLeft() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else if (imageIndex == 0) {
      setImageIndex(2);
    }
    console.log(imageIndex);
  }

  function handleChangeImageRight() {
    console.log(imageIndex);
    if (imageIndex < 2) {
      setImageIndex(imageIndex + 1);
    } else if (imageIndex == 2) {
      setImageIndex(0);
    }
    console.log(imageIndex);
  }

  return (
    <div
      id="CarouselBackground"
      className="relative my-auto flex h-full w-full items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${imageArray[imageIndex]})`,
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
        className="container z-10 my-40 px-10"
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

import Head from "next/head";
import ImageHeaderFull from "./components/ImageStyle.jsx";
import { ImageHeaderHalf } from "./components/ImageHeaderHalf.jsx";
import NavBar from "./components/navbar.jsx";
import HomePageContent from "./components/ContentDiv.jsx";
import Footer from "./components/footer.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lynx&apos;s blog</title>
      </Head>
      <NavBar />
      <ImageHeaderFull
        path={`images/DSC_0130.jpg`}
        startX={50 + "%"}
        startY={50 + "%"}
        type={"gradientScopeBlack"}
        text="Lynx's Blog"
      />

      <HomePageContent />
      <ImageCarousel />
      <Footer />
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Lynx&apos;s blog</title>
//       </Head>
//       <NavBar scrollModifier={2} />
//       <ImageHeaderHalf
//         path={`images/DSC_0130.jpg`}
//         startX={50 + "%"}
//         startY={50 + "%"}
//         type={"gradientScopeBlack"}
//         text="Lynx's Blog"
//       />
//       <HomePageContent />
//       <Footer />
//     </>
//   );
// }

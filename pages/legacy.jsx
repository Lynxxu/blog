import Head from "next/head";
import Travel from "./components/homepage/travel.jsx";
import ImageHeaderFull from "./components/PersonalWeb/ImageStyle.jsx";
import { ImageHeaderHalf } from "./components/PersonalWeb/ImageHeaderHalf.jsx";
import NavBar from "./components/PersonalWeb/navbar.jsx";
import HomePageContent from "./components/PersonalWeb/ContentDiv.jsx";
import Footer from "./components/footer.jsx";
import ImageCarousel from "./components/PersonalWeb/ImageCarousel.jsx";

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
      <Footer />
      {/* <Travel /> */}
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

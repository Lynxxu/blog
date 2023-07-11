import Head from "next/head";
import ImageHeader from "./components/ImageStyle.jsx";
import NavBar from "./components/navbar.jsx";
import HomePageContent from "./components/ContentDiv.jsx";

function Content() {
  return <div style={{ height: "10000px" }}></div>;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lynx&apos;s blog</title>
      </Head>
      <NavBar />
      <ImageHeader
        path={`images/DSC_0130.jpg`}
        startX={50 + "%"}
        startY={50 + "%"}
        type={"gradientScopeBlack"}
        text="Lynx's Blog"
      />
      <HomePageContent />
    </>
  );
}

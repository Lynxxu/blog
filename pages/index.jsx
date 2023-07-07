import Head from "next/head";
import ImageHeader from "./components/ImageStyle.jsx";

function Content() {
  return <div style={{ height: "10000px" }}></div>;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lynx&apos;s blog</title>
      </Head>
      <ImageHeader
        path={`images/PranaLieDown.jpg`}
        startX={50 + "%"}
        startY={50 + "%"}
        type={"gradientScopeBlur"}
        text="Lynx's Blog"
      />
      <Content />
    </>
  );
}

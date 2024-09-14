import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../public/images/ProfilePicTignari.jpg";
import constallation from "../../public/images/Logo-Con.png";
import starRail from "../../public/images/StarRail.jpg";
import { ConLogoDivide } from "./ImageStyle.jsx";
import ImageCarousel from "./ImageCarousel.jsx";

export function LineDivide() {
  return <hr className="divide-y-1 mb-4 w-full border-gray-400 opacity-30" />;
}

export function CenterTextDiv({ text }) {
  return (
    <div className="m-5 mt-40 font-serif text-2xl font-normal md:w-1/2">
      <p className="container my-20 ">{text}</p>
    </div>
  );
}

export function CenteredSubHeading({ text }) {
  return (
    <div className="my-10 flex w-full flex-col items-center text-center font-serif text-4xl font-medium">
      <p className="container w-full p-5 text-center">{text}</p>
      <hr className="break w-3/4" />
    </div>
  );
}

function ArticleCard({
  title,
  date,
  imageSrc,
  summary,
  alt,
  articleSrc,
  imageStyle = {}, // This takes inline CSS property-value pairs
  height = 80,
  width = 80,
}) {
  return (
    <Link href={articleSrc}>
      <div className="m-auto mt-3 flex rounded-lg  border border-gray-200 p-4 shadow-md">
        <div className="flex w-1/4 content-center justify-center pe-4 md:w-1/5 xl:w-[10%]">
          <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            style={imageStyle}
          ></Image>
        </div>
        <div className="flex w-3/4 flex-col md:w-4/5  xl:w-[90%]">
          <h1 className="font-medium">{title}</h1>
          <p className="mt-1 text-sm text-gray-400">{date}</p>
          <p className="mt-2 line-clamp-3 text-sm text-gray-800">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

function ImageArticleCardSquare({
  title,
  imageSrc,
  alt,
  articleSrc,
  imageStyle = {}, // This takes inline CSS property-value pairs
  height = 500,
  width = 750,
}) {
  return (

      <div className="m-auto mt-3 rounded-lg p-4 w-full h-full">
            <Link href={articleSrc} className="w-full">
        <div className="flex w-full flex-col items-center justify-between h-full">
          <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            style={imageStyle}
          ></Image>
          <h2 className="mt-2 line-clamp-3 w-[200px] text-center text-sm font-light uppercase text-gray-800">
            {title}
          </h2>
        </div>
        </Link>
      </div>

  );
}

function CollapsableSideBar() {
  return (
    <div id="col2-sidebar" className="m-2 md:mx-auto md:w-1/3 md:ps-3">
      <h2 className="py-4 font-serif text-lg font-bold">About Me</h2>

      <Image
        src={ProfilePic}
        alt="Profile picture, Tignari from Genshin Impact"
      ></Image>
    </div>
  );
}

function RecommendedArticles() {
  return (
    <>
      <p>Recommended Articles</p>
      <div id="latest" className="flex overflow-hidden">
        <ImageArticleCardSquare
          title="Kyoto: a sanatorium, where my heart lies"
          articleSrc={"#"}
          alt={"My tour to Kyoto"}
          imageSrc={"/images/K-on.jpg"}
        />
        <ImageArticleCardSquare
          title="Kyoto: a sanatorium, where my heart lies"
          articleSrc={"#"}
          alt={"My tour to Kyoto"}
          imageSrc={"/images/K-on.jpg"}
        />
        <ImageArticleCardSquare
          title="Kyoto: a sanatorium, where my heart lies"
          articleSrc={"#"}
          alt={"My tour to Kyoto"}
          imageSrc={"/images/K-on.jpg"}
        />
      </div>
    </>
  );
}

export default function HomePageContent() {
  return (
    <>
      <div
        id="main-wrapper-1"
        className="container m-auto mt-2 p-1 md:mt-5 md:p-4"
      >
        <div
          id="content"
          className=" m-auto flex flex-wrap items-center justify-center"
        >
          <CenterTextDiv
            text="Welcome to my creative haven. I'm Lynx, a traveler and gamer at
        heart. Join me as I explore the world, delve into Japanese ACG, and
        share insights from front-end development to travel logs. Let's
        embark on this journey together, one post at a time."
          />
          <Image
            className="mt-20"
            src={starRail}
            width={200}
            height={200}
            alt="starRail picture for deco"
          />
        </div>
        {/* <ConLogoDivide /> */}

        {/* <LineDivide />
      <div
        id="content"
        className=" m-auto flex flex-wrap justify-center align-top"
      >
        <RecommendedArticles />
      </div> */}
      </div>
      <CenteredSubHeading text={"Portals"} />
      <Directories />
      <br />
      <CenteredSubHeading text={"Travel notes"} />
      <ImageCarousel />
    </>
  );
}

function Directories() {
  return (
    <div
      id="main-wrapper-1"
      className="container m-auto mt-2 grid grid-cols-2 p-1 md:mt-5 md:p-4 lg:grid-cols-3 "
    >
      <ImageArticleCardSquare
        title="Next.js introduction"
        articleSrc={"#"}
        alt={"My tour to Kyoto"}
        imageSrc={"/images/Next.js.png"}
      />
      <ImageArticleCardSquare
        title="React, interesting framework"
        articleSrc={"#"}
        alt={"My tour to Kyoto"}
        imageSrc={"/images/React.png"}
      />
      <ImageArticleCardSquare
        title="Why Bootstrap if tailwind"
        articleSrc={"#"}
        alt={"My tour to Kyoto"}
        imageSrc={"/images/Tailwindcss6.png"}
      />
      <ImageArticleCardSquare
        title="HTML Introduction"
        articleSrc={"#"}
        alt={"My tour to Kyoto"}
        imageSrc={"/images/HTML.png"}
      />
      <ImageArticleCardSquare
        title="Japanese Via Songs: アンコール"
        articleSrc={"#"}
        alt={"My tour to Kyoto"}
        imageSrc={"/images/Thebook2.png"}
      />
      <ImageArticleCardSquare
        title="Toronot at Fall"
        articleSrc={"#"}
        alt={"My tour to Kyoto"}
        imageSrc={"/images/Toroton Fall lakeshore.jpg"}
      />
    </div>
  );
}

// export default function HomePageContent() {
//   return (
//     <div id="main-wrapper" className="container m-auto mt-2 p-1 md:mt-5 md:p-4">
//       <div
//         id="content"
//         className=" m-auto flex flex-wrap items-center justify-center"
//       >
//         <CenterTextDiv
//           text="Welcome to my creative haven. I'm Lynx, a traveler and gamer at
//         heart. Join me as I explore the world, delve into Japanese ACG, and
//         share insights from front-end development to travel logs. Let's
//         embark on this journey together, one post at a time."
//         />
//         <div>
//           <Image
//             src={starRail}
//             alt="Profile picture, Tignari from Genshin Impact"
//             width={200}
//           ></Image>
//         </div>
//       </div>
//       <hr className="divide-y-1 mb-4 w-full border-gray-400" />
//       <div
//         id="content"
//         className=" m-auto flex flex-wrap justify-center align-top"
//       >
//         <div id="col1-content" className="m-3 sm:m-auto md:w-2/3 md:pe-3">
//           <h1 className="py-2 font-serif text-2xl font-bold">
//             Recommended Articles
//           </h1>
//           <ArticleCard
//             title={"Promise: the utlimate solution to async JavaScript"}
//             date={"2022-09-22"}
//             imageSrc={"./images/JS-Logo.svg"}
//             summary={
//               "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript."
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//             height={60}
//             width={60}
//           />
//           <ArticleCard
//             title={"Synchronizing with external APIs with useEffect hook"}
//             date={"2023-07-22"}
//             imageSrc={"/images/React-Logo.svg"}
//             summary={
//               "Some components may need to synchronize with external systems. For example, you may wish to send some logs when a component appears on screen. This can be done by Effects, which allows you to run some code after rendering."
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//             width={90}
//             height={90}
//           />
//           <ArticleCard
//             title={"Promise: the utlimate solution to async JavaScript"}
//             date={"2022-09-22"}
//             imageSrc={"./images/JS-Logo.svg"}
//             summary={
//               "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It "
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//           />
//           <ArticleCard
//             title={"Promise: the utlimate solution to async JavaScript"}
//             date={"2022-09-22"}
//             imageSrc={"./images/JS-Logo.svg"}
//             summary={
//               "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It "
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//           />
//           <ArticleCard
//             title={"Promise: the utlimate solution to async JavaScript"}
//             date={"2022-09-22"}
//             imageSrc={"./images/JS-Logo.svg"}
//             summary={
//               "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It "
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//           />
//           <ArticleCard
//             title={"Promise: the utlimate solution to async JavaScript"}
//             date={"2022-09-22"}
//             imageSrc={"./images/JS-Logo.svg"}
//             summary={
//               "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It "
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//           />
//           <ArticleCard
//             title={"Promise: the utlimate solution to async JavaScript"}
//             date={"2022-09-22"}
//             imageSrc={"./images/JS-Logo.svg"}
//             summary={
//               "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It "
//             }
//             alt={"JavaScript logo"}
//             articleSrc={"#"}
//           />
//         </div>
//         <CollapsableSideBar />
//       </div>
//   </div>
// );
// }

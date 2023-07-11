import Image from "next/image";
import Link from "next/link";

export function ArticleCard({
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
      <div className="container m-auto mt-3 flex rounded-lg border border-gray-200 p-4 shadow-md">
        <Image
          src={imageSrc}
          width={width}
          height={height}
          alt={alt}
          className="me-4 p-2"
          style={imageStyle}
        ></Image>
        <div className="flex flex-col">
          <h1 className="text-bold">{title}</h1>
          <p className="mt-1 text-sm text-gray-400">{date}</p>
          <p className="mt-2 line-clamp-3 text-sm text-gray-800">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomePageContent() {
  return (
    <div id="main-wrapper" className="container m-auto p-1 md:mt-5 md:p-4">
      <div
        id="content"
        className="conatiner m-auto flex flex-wrap justify-center"
      >
        <div id="col1-content" className="pe-2 md:w-2/3">
          <h1 className="py-2 text-xl">Recommended Articles</h1>
          <ArticleCard
            title={"Promise: the utlimate solution to async JavaScript"}
            date={"2022-09-22"}
            imageSrc={"./images/JS-Logo.svg"}
            summary={
              "Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It  Promise provides an elegant solution to the problem of asychronous JavaScript. It Promise provides an elegant solution to the problem of asychronous JavaScript. It "
            }
            alt={"JavaScript logo"}
            articleSrc={"#"}
          />
        </div>
        <div id="col2-sidebar" className="ps-2 md:w-1/3">
          <h2 className="text-md">About Me</h2>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
let imageData = [
  {
    imageDir: "/images/Fushimi-inari-taisha.jpg",
    link: "https://example.com/link1",
  },
  {
    imageDir: "/images/KON-table.jpg",
    link: "https://example.com/link2",
  },
  {
    imageDir: "/images/Toroton Fall lakeshore.JPG",
    link: "https://example.com/link3",
  },
];

function SquareCard({ imageDir, link }) {
  return (
    <Link href={link}>
      <Image
        alt="image link to an article"
        src={imageDir}
        height={200}
        width={200}
        className="m-5 h-[250px] w-[250px] drop-shadow-xl"
      />
    </Link>
  );
}

export default function Travel() {
  return (
    <div className="w-[100%] p-10 xl:p-20">
      <h2 className="my-8 text-2xl font-medium">Travel</h2>
      <div className="flex flex-wrap items-center justify-center align-middle">
        {imageData.map((image, index) => (
          <SquareCard key={index} imageDir={image.imageDir} link={image.link} />
        ))}
      </div>
    </div>
  );
}

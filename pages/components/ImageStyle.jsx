import styles from "../../styles/Components/themes.module.css";
import Image from "next/image";
import LogoCon from "../../public/images/Logo-Con-tri.png";

export function DarkenedLayer() {
  return (
    <>
      <div className="absolute z-20 h-full w-full bg-black opacity-50 backdrop-blur-xl"></div>
      <div className="absolute z-20 h-full w-full backdrop-blur-sm"></div>
    </>
  );
}

export function getCursorPosition(e) {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth) * 100;
  const y = (e.clientY / innerHeight) * 100;

  return { x, y };
}

export function getLocalCursorPosition(e, offsetX = 0, offsetY = 0) {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left - offsetX;
  let y = e.clientY - rect.top - offsetY;
  return { x, y };
}

export default function ImageHeaderFull({
  text = "",
  path,
  type = "gradientScopeBlur",
  startX = 0,
  startY = 0,
}) {
  let gradientRef = null;

  const handleMouseEnter = (e) => {
    const { x, y } = getCursorPosition(e);
    gradientRef.style.setProperty("--x", x + "%");
    gradientRef.style.setProperty("--y", y + "%");
  };

  function handleMouseLeave() {
    gradientRef.style.setProperty("--x", startX);
    gradientRef.style.setProperty("--y", startY);
  }

  return (
    <>
      <div
        className="flex h-screen flex-wrap items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${path})`,
        }}
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles[type]}
          id="gradient"
          ref={(ref) => (gradientRef = ref)}
        ></div>
        {text && (
          <div className="font-serif text-[2.5rem] text-prana-white drop-shadow-xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
            {text}
          </div>
        )}
      </div>
    </>
  );
}

export function ConLogoDivide() {
  return (
    <div>
      <Image
        className="m-auto my-32 content-center opacity-70"
        src={LogoCon}
        width={500}
        height={100}
        alt="Constellation logo divide"
      ></Image>
    </div>
  );
}

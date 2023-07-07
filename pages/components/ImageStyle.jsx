import { useEffect, useState } from "react";
import styles from "../../styles/Components/themes.module.css";
import { useRef } from "react";
function getCursorPosition(e) {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth) * 100;
  const y = (e.clientY / innerHeight) * 100;

  return { x, y };
}

// export default function ImageHeader({
//   text = "",
//   path,
//   type = "gradientScopeBlur", //another option here is 'gradientScopeBlack', which darkens the rest of area
//   startX = 0,
//   startY = 0,
// }) {
//   useEffect(() => {
//     const gradient = document.getElementById("gradient");

//     gradient.style.setProperty("--x", startX);
//     gradient.style.setProperty("--y", startY);

//     function handleMouseEnter(e) {
//       const { x, y } = getCursorPosition(e);
//       gradient.style.setProperty("--x", x + "%");
//       gradient.style.setProperty("--y", y + "%");
//     }

//     gradient.addEventListener("mousemove", handleMouseEnter);

//     return () => {
//       gradient.removeEventListener("mousemove", handleMouseEnter);
//     };
//   }, [startX, startY]);

//   return (
//     <>
//       <div
//         className="flex h-screen items-center justify-center bg-cover bg-right"
//         style={{
//           backgroundImage: `url(${path})`,
//         }}
//       >
//         <div className={styles[type]} id="gradient"></div>
//         {text && <div className="text-6xl text-prana-white">{text}</div>}
//       </div>
//     </>
//   );
// }

export default function ImageHeader({
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
        className="flex h-screen items-center justify-center bg-cover bg-right"
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
        {text && <div className="text-6xl text-prana-white">{text}</div>}
      </div>
    </>
  );
}

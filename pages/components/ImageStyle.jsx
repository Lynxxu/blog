import styles from "../../styles/Components/themes.module.css";

function getCursorPosition(e) {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth) * 100;
  const y = (e.clientY / innerHeight) * 100;

  return { x, y };
}

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
        className="flex h-screen items-center justify-center bg-cover bg-center"
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
          <div className="font-serif text-[2rem] text-prana-white drop-shadow-xl md:text-[3rem] lg:text-[3.5rem]">
            {text}
          </div>
        )}
      </div>
    </>
  );
}

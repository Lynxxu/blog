export default function ImageHeaderHalf({ text, path }) {
  return (
    <>
      <div
        className="flex h-[50vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${path})`,
        }}
      >
        {text && (
          <div className="font-serif text-[2rem] text-prana-white drop-shadow-xl md:text-[3rem] lg:text-[3.5rem]">
            {text}
          </div>
        )}
      </div>
    </>
  );
}

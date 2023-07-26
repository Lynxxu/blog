<<<<<<< HEAD
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
=======
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
>>>>>>> 338bb39a9a6b3b81e4078eaf1d1d66d02f90dd98

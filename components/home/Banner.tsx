import Image from "next/image"
import React from "react"

const Banner = () => {
  return (
    <header className="mt-24 md:mt-28 flex items-center justify-center">
      <div className="mt-5 md:mt-10 flex items-center justify-around">
        {/* MAIN IMAGE */}
        <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] flex items-center custom-border bg-gradient-to-br from-lime-950 to-lime-500 shadow-md shadow-slate-300">
          <Image
            className="absolute z-10 bottom-[10%] rounded-full"
            src={`https://i.postimg.cc/hGKKQFsJ/leslie6.png`}
            alt="Leslie"
            width={713}
            height={713}
          />
          <div className="w-full h-1 bg-white bg-opacity-80 rotate-45 rounded-lg"></div>
        </div>
        {/* TITTLE */}
        <div className="w-[40%] text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">
          Sistema de gestión de crecimiento poblacional usando el modelo de
          Leslie en distintas especies de Los Pantanos de Villa
        </div>
      </div>
    </header>
  )
}

export default Banner

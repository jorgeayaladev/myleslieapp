import Image from "next/image"
import React from "react"
import { HomeOutlineIcon, RedirectOutlineIcon } from "../Icons"

const Aside = () => {
  return (
    <aside className="hidden lg:w-[25%] lg:flex flex-col gap-5">
      {/* INFORMATION PATHS */}
      <div className="p-5 bg-white rounded-xl shadow-xl">
        <h2 className="text-lg xl:text-xl text-center font-bold underline">
          Fuentes de información
        </h2>
      </div>

      {/* PANTANOS INFO */}
      <div className="p-5 flex flex-col items-center gap-5 bg-white rounded-xl shadow-xl">
        <h2 className="text-xl xl:text-2xl text-center font-semibold">
          Los Pantanos de Villa
        </h2>
        <Image
          className="w-[150px]"
          src={`https://i.postimg.cc/76QDdby0/logopantanos.png`}
          alt="Leslie Modelo"
          width={250}
          height={206}
        />
        <a
          href="https://pantanosdevilla.pe/"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 flex items-center gap-2 text-white bg-gradient-to-tr from-lime-600 to-lime-800 rounded-2xl shadow-lg"
        >
          <HomeOutlineIcon styles="size-5" />
          <p className="text-base xl:text-lg font-semibold">Sitio oficial</p>
          <RedirectOutlineIcon styles="size-5" />
        </a>
      </div>

      {/* ECO-REGISTROS INFO */}
      <div className="p-5 flex flex-col items-center gap-5 bg-white rounded-xl shadow-xl">
        <h2 className="text-xl xl:text-2xl text-center font-semibold">
          EcoRegistros
        </h2>
        <Image
          className="w-[150px]"
          src={`https://i.postimg.cc/CMjk0RNH/ecoregistros.png`}
          alt="Leslie Modelo"
          width={250}
          height={206}
        />
        <a
          href="https://www.ecoregistros.org/site/index.php"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 flex items-center gap-2 text-white bg-gradient-to-tr from-lime-600 to-lime-800 rounded-2xl shadow-lg"
        >
          <HomeOutlineIcon styles="size-5" />
          <p className="text-base xl:text-lg font-semibold">Sitio oficial</p>
          <RedirectOutlineIcon styles="size-5" />
        </a>
      </div>

      {/* POPULAR SPECIES INFO */}
      <div className="p-5 flex flex-col items-center gap-5 bg-white rounded-xl shadow-xl">
        <h2 className="text-xl text-center font-bold underline">
          Especies populares
        </h2>
        {/* SPECIES */}
        {["1", "2", "3"].map((el, index) => (
          <div
            className="w-full p-5 flex items-center justify-center gap-4 text-white bg-gradient-to-tr from-lime-600 to-lime-800 rounded-xl"
            key={index}
          >
            <Image
              className="w-16 h-16 rounded-[50%] shadow-xl"
              src={`https://i.postimg.cc/KvMNG9z3/leslie1.jpg`}
              alt="Leslie Logo"
              width={713}
              height={713}
            />
            <div className="hidden xl:block">
              <p>
                <b>Nombre</b>: Leslie
              </p>
              <p>
                <b>Familia</b>: familia
              </p>
              <p>
                <b>Especies</b>: 1234 especies
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SOCIAL NETWORKS */}
      <div className="p-5 flex flex-col gap-5 bg-white rounded-xl shadow-xl">
        <h3>Redes sociales [...]</h3>
      </div>
    </aside>
  )
}

export default Aside

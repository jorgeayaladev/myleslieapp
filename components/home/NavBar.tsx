import Image from "next/image"
import React from "react"
import { MenuOutlineIcon, PersonOutlineIcon } from "../Icons"

const NavBar = () => {
  return (
    <nav className="w-screen sm:container p-5 md:mt-5 fixed top-0 z-20 flex items-center justify-between bg-lime-950 bg-opacity-90 rounded-b-lg md:rounded-lg shadow-lg">
      {/* LOGO */}
      <div className="px-5 py-2 flex items-center gap-2 bg-white rounded-full shadow-md">
        <Image
          className="w-6 h-6 rounded-[50%]"
          src={`https://i.postimg.cc/KvMNG9z3/leslie1.jpg`}
          alt="Leslie Logo"
          width={713}
          height={713}
        />
        <h1 className="text-lg font-bold">Leslie App</h1>
      </div>

      {/* LINKS */}
      <div className="hidden md:flex items-center gap-5">
        {["Especies", "Estadísticas", "Acerca de", "Galería"].map(
          (el, index) => (
            <div
              className="flex items-center gap-2 font-semibold text-lg text-white"
              key={index}
            >
              {el}
            </div>
          )
        )}
      </div>

      <div className="flex items-center gap-5">
        <button className="p-2 lg:px-5 lg:py-2 flex items-center gap-2 text-base bg-white rounded-full">
          <PersonOutlineIcon styles="size-5" />
          <p className="hidden lg:block">Iniciar sesión</p>
        </button>
        <button className="p-2 flex md:hidden sm:flex items-center  bg-white rounded-[50%]">
          <MenuOutlineIcon styles="size-5" />
        </button>
      </div>
    </nav>
  )
}

export default NavBar

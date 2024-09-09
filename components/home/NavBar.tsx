"use client"

import Image from "next/image"
import { useState } from "react"
import { MenuOutlineIcon, PersonOutlineIcon } from "../Icons"
import Link from "next/link"
import SignIn from "./SignIn"
import MenuModal from "../MenuModal"

const NavBar = () => {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <nav className="w-screen sm:container p-5 md:mt-5 fixed top-0 z-20 flex items-center justify-between bg-lime-950 bg-opacity-90 sm:rounded-b-lg md:rounded-lg shadow-lg">
        {/* LOGO */}
        <Link
          href="/"
          className="px-5 py-2 flex items-center gap-2 bg-white rounded-full shadow-md"
        >
          <Image
            className="w-6 h-6 rounded-[50%]"
            src={`https://i.postimg.cc/KvMNG9z3/leslie1.jpg`}
            alt="Leslie Logo"
            width={713}
            height={713}
          />
          <h1 className="text-lg font-bold">Leslie App</h1>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/about">
            <h2 className="text-lg text-white text-opacity-75 hover:text-opacity-100 font-bold">
              Acerca de
            </h2>
          </Link>
          <Link href="/species">
            <h2 className="text-lg text-white text-opacity-75 hover:text-opacity-100 font-bold">
              Especies
            </h2>
          </Link>
          <Link href="/gallery">
            <h2 className="text-lg text-white text-opacity-75 hover:text-opacity-100 font-bold">
              Galería
            </h2>
          </Link>
          <Link href="/statistics">
            <h2 className="text-lg text-white text-opacity-75 hover:text-opacity-100 font-bold">
              Estadísticas
            </h2>
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowSignIn(true)}
            className="p-2 lg:px-5 lg:py-2 flex items-center gap-2 text-base bg-white rounded-full"
          >
            <PersonOutlineIcon styles="size-5" />
            <p className="hidden lg:block">Iniciar sesión</p>
          </button>
          <button
            onClick={() => setShowMenu(true)}
            className="p-2 flex md:hidden sm:flex items-center  bg-white rounded-[50%]"
          >
            <MenuOutlineIcon styles="size-5" />
          </button>
        </div>
      </nav>

      {/* SIGN IN MODAL */}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}

      {/* MENU MODAL */}
      {showMenu && <MenuModal onClose={() => setShowMenu(false)} />}
    </>
  )
}

export default NavBar

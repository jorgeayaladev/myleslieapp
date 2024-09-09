import Image from "next/image"
import React from "react"
import {
  ContactSolidIcon,
  EmailOutlineIcon,
  PencilOutlineIcon,
  SendSolidIcon,
} from "../Icons"

const Footer = () => {
  return (
    <footer className="md:mb-10 p-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-lime-950 bg-opacity-90 sm:rounded-t-lg md:rounded-lg shadow-lg">
      <div className="col-span-1 flex flex-col">
        {/* LOGO */}
        <div className="p-5 flex items-center gap-4">
          <Image
            className="w-[50px] h-[50px] rounded-[50%]"
            src={`https://i.postimg.cc/KvMNG9z3/leslie1.jpg`}
            alt="Leslie Logo"
            width={713}
            height={713}
          />
          <div className="text-white">
            <h1 className="text-3xl font-bold">Leslie App</h1>
            <small className="mt-1 italic">Creado por Jorge Ayala</small>
          </div>
        </div>

        <hr className="mx-10 h-0.5 bg-white rounded-full" />

        {/* SOCIAL NETWORKS */}
        <div className="p-5 text-white">Redes sociales [...]</div>
      </div>

      {/* CONTACT */}
      <div className="col-span-1 p-5 flex flex-col gap-4 bg-gradient-to-tr from-cyan-700 to-cyan-900 rounded-xl">
        <div className="flex items-center gap-4 text-white">
          <ContactSolidIcon styles="size-6" />
          <h2 className="text-3xl font-bold">Contacto</h2>
        </div>
        <form className="lg:mx-10 flex flex-col gap-4">
          <p className="text-white">
            Envíame un correo y mantengámonos en contacto
          </p>
          <div className="px-5 py-3 flex gap-4 bg-white rounded-xl">
            <EmailOutlineIcon styles="size-6" />
            <input
              className="w-full focus:outline-none"
              type="email"
              placeholder="Ingresa tu Email.."
              required
            />
          </div>
          <div className="px-5 py-3 flex gap-4 bg-white rounded-xl">
            <PencilOutlineIcon styles="size-6" />
            <textarea
              className="w-full focus:outline-none"
              placeholder="Déjame un comentario.."
            />
          </div>
          <div className="text-white">
            <button className="px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-lime-600 to-lime-800 rounded-2xl shadow-lg">
              <SendSolidIcon styles="size-6" />
              <p className="text-lg font-semibold">Enviar</p>
            </button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default Footer

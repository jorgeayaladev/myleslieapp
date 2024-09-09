import { useRef } from "react"
import { EmailOutlineIcon, SignInSolidIcon, XMarkSolidIcon } from "../Icons"
import Image from "next/image"

const SignIn = ({ onClose }: { onClose: () => void }) => {
  const modalSignInRef = useRef<HTMLInputElement>(null)
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (modalSignInRef.current === e.target) onClose()
  }
  return (
    <div
      ref={modalSignInRef}
      onClick={closeModal}
      className="fixed inset-0 z-20 p-5 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div className="p-5 flex flex-col items-end bg-gradient-to-tr from-lime-300 to-lime-700 rounded-xl shadow-xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="p-2 text-white bg-gradient-to-tr from-slate-500 to-slate-900 rounded-[50%] shadow-xl"
        >
          <XMarkSolidIcon styles="size-6" />
        </button>
        {/* CONTENT */}
        <form className="mt-2 p-5 flex flex-col items-center gap-4 bg-gradient-to-tr from-slate-500 to-slate-900 rounded-xl shadow-xl">
          <h2 className="text-2xl text-white font-bold">Iniciar sesión</h2>
          <Image
            className="w-[100px] rounded-[50%] shadow-lg"
            src={`https://i.postimg.cc/KvMNG9z3/leslie1.jpg`}
            alt="Leslie Logo"
            width={713}
            height={713}
          />
          <div className="px-5 py-3 flex gap-4 bg-white rounded-xl">
            <EmailOutlineIcon styles="size-6" />
            <input
              className="w-full focus:outline-none"
              type="email"
              placeholder="Ingresa tu Email.."
              required
            />
          </div>
          <div className="text-white">
            <button className="px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-lime-600 to-lime-800 rounded-2xl shadow-lg">
              <p className="text-lg font-semibold">Enviar acceso</p>
              <SignInSolidIcon styles="size-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn

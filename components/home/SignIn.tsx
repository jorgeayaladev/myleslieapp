"use client"

import { FormEvent, useRef, useState } from "react"
import { EmailOutlineIcon, SignInSolidIcon, XMarkSolidIcon } from "../Icons"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

const SignIn = ({ onClose }: { onClose: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<{
    description: string
    color: string
  } | null>(null)

  // HandleModal
  const modalSignInRef = useRef<HTMLInputElement>(null)
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (modalSignInRef.current === e.target) onClose()
  }

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(event.currentTarget)
      const userEmail = formData.get("email") as string
      const { data, error } = await supabase.auth.signInWithOtp({
        email: userEmail,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: false,
        },
      })
      if (data) {
        console.log(data)
        setMessage({
          description: `Se te envió un email a ${userEmail} para que puedas iniciar sesión!`,
          color: "bg-green-500",
        })
      }
      if (error) {
        console.log(error)
        setMessage({
          description: `No existe una cuenta para el email: ${userEmail}, debes registrarte!`,
          color: "bg-red-500",
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      ref={modalSignInRef}
      onClick={closeModal}
      className="fixed inset-0 z-20 p-5 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div className="p-5 max-w-[400px] flex flex-col items-end bg-gradient-to-tr from-lime-300 to-lime-700 rounded-xl shadow-xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="p-2 text-white bg-gradient-to-tr from-slate-500 to-slate-900 rounded-[50%] shadow-xl"
        >
          <XMarkSolidIcon styles="size-6" />
        </button>
        {/* CONTENT */}
        <form
          onSubmit={login}
          className="mt-2 p-5 flex flex-col items-center gap-4 bg-gradient-to-tr from-slate-500 to-slate-900 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl text-white font-bold">Iniciar sesión</h2>
          <Image
            className="w-[100px] rounded-[50%] shadow-lg"
            src={`https://i.postimg.cc/KvMNG9z3/leslie1.jpg`}
            alt="Leslie Logo"
            width={713}
            height={713}
          />
          <label className="px-5 py-3 flex gap-4 bg-white rounded-xl">
            <EmailOutlineIcon styles="size-6" />
            <input
              type="email"
              name="email"
              className="w-full focus:outline-none"
              placeholder="Ingresa tu Email.."
              required
            />
          </label>
          <button
            type="submit"
            className="px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-lime-600 to-lime-800 text-white rounded-2xl shadow-lg"
          >
            <p className="text-lg font-semibold">Enviar acceso</p>
            <SignInSolidIcon styles="size-6" />
          </button>
          {message && (
            <div
              className={`p-3 text-xs text-center font-bold ${message?.color} text-white rounded-lg`}
            >
              {message?.description}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default SignIn

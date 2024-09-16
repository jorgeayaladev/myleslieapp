"use client"
import { SignInSolidIcon } from "@/components/Icons"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()
  
  const logout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">
        Has iniciado sesión en la página exitosamente
      </h1>
      <div className="mt-4 text-white">
        <button
          onClick={logout}
          className="px-5 py-2 flex items-center gap-2 bg-gradient-to-tr from-lime-600 to-lime-800 rounded-2xl shadow-lg"
        >
          <p className="text-lg font-semibold">Cerrar sesión</p>
          <SignInSolidIcon styles="size-6" />
        </button>
      </div>
    </div>
  )
}

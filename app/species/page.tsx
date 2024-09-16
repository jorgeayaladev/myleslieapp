"use client"

import { BugSolidIcon } from "@/components/Icons"
import { preservationState } from "@/constants/data"
import { supabase } from "@/lib/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

type SpecieData = {
  id: number
  created_at: string
  scientific_name: string
  spanish_name: string
  english_name: string
  portuguese_name: string
  description: string
  place: string
  year: number
  iucn: number
  youth_data: number[]
  adult_data: number[]
  mature_data: number[]
  images: string[]
  family_id: number
}

type SpeciesData = {
  id: number
  spanish_name: string
  scientific_name: string
  images: string[]
  iucn: number
}

type FetchSpeciesData = {
  data: SpeciesData[] | null
  error: PostgrestError | null
}

export default function Species() {
  const [species, setSpecies] = useState<SpeciesData[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSpecies = async () => {
      setLoading(true)
      const { data, error }: FetchSpeciesData = await supabase
        .from("specie")
        .select("id, spanish_name, scientific_name, images, iucn")
        .order("spanish_name", { ascending: true })

      if (error) {
        console.error("Error fetching species:", error)
      } else {
        console.log(data)
        setSpecies(data)
      }
      setLoading(false)
    }

    fetchSpecies()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section className="my-5 p-10 w-full flex flex-col gap-5 bg-gradient-to-tr from-gray-50 to-gray-300 rounded-xl">
      {/* SPECIES */}
      <div className="flex items-center gap-4">
        <BugSolidIcon styles="size-6 xl:size-8" />
        <h2 className="text-3xl xl:text-4xl font-bold underline">Especies</h2>
      </div>
      <hr className="h-1 bg-gray-600"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {species?.map((specie, index) => {
          let conservation = preservationState.find(
            (state) => state.id === specie.iucn
          )
          return (
            <Link
              href={`/species/${specie.id}`}
              className="p-10 bg-gradient-to-tr from-amber-50 to-amber-400 hover:from-amber-400 hover:to-amber-900 hover:text-white flex flex-col items-center justify-center gap-3 border-2 border-amber-900 hover:border-white shadow-lg rounded-xl cursor-pointer transition duration-700"
              key={`specie_${index}`}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold">{specie.spanish_name}</h2>
                <small className="mt-2 italic">{specie.scientific_name}</small>
              </div>
              <div className="relative">
                <Image
                  className="h-[200px] object-cover border-2 border-white rounded-xl"
                  src={specie.images[0]}
                  alt={specie.scientific_name}
                  width={400}
                  height={400}
                />
              </div>
              <div
                className={`px-4 py-2 text-sm text-black text-center border-2 border-white rounded-lg`}
                style={{background: conservation?.color}}
              >
                <b>Estado</b>: <u>{conservation?.name}</u>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

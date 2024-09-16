"use client"

import Information from "@/components/species/id/Information"
import MathCalculus from "@/components/species/id/MathCalculus"
import SpecieChart from "@/components/species/id/SpecieChart"
import { supabase } from "@/lib/supabase"
import { FetchSpecieData, SpecieData } from "@/types/dataTypes"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Specie = () => {
  const [specieData, setSpecieData] = useState<SpecieData | null>()
  const [loading, setLoading] = useState<boolean>(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchSpecie = async () => {
      setLoading(true)
      const { data, error }: FetchSpecieData = await supabase
        .from("specie").select("*").eq("id", id)

      if (error) {
        console.error("Error fetching species:", error)
      } else {
        console.log(data)
        setSpecieData(data && data[0])
      }
      setLoading(false)
    }

    fetchSpecie()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full sm:py-5 grid grid-cols-2 sm:gap-5">
      {/* SPECIE INFORMATION */}
      {specieData && <Information data={specieData} />}

      <hr className="block sm:hidden col-span-2 h-1 bg-gray-500 rounded-lg" />

      {/* MATH CALCULUS */}
      {specieData && <MathCalculus aM={[specieData.youth_data, specieData.adult_data, specieData.mature_data]} />}
      <hr className="block sm:hidden col-span-2 h-1 bg-gray-500 rounded-lg" />

      {/* LINE CHART */}
      {specieData && <SpecieChart aM={[specieData.youth_data, specieData.adult_data, specieData.mature_data]} />}
    </div>
  )
}

export default Specie

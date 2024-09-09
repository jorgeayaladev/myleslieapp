"use client"

import Information from "@/components/species/id/Information"
import MathCalculus from "@/components/species/id/MathCalculus"
import SpecieChart from "@/components/species/id/SpecieChart"

const Specie = () => {

  return (
    <div className="w-full sm:py-5 grid grid-cols-2 sm:gap-5">
      {/* SPECIE INFORMATION */}
      <Information />

      <hr className="block sm:hidden col-span-2 h-1 bg-gray-500 rounded-lg" />

      {/* MATH CALCULUS */}
      <MathCalculus />

      <hr className="block sm:hidden col-span-2 h-1 bg-gray-500 rounded-lg" />

      {/* LINE CHART */}
      <SpecieChart />
    </div>
  )
}

export default Specie

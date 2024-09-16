"use client"
import { CalculatorOutlineIcon } from "@/components/Icons"
import { p3x1M, p3x3M } from "@/math/latex"
import { InlineMath } from "react-katex"
import "katex/dist/katex.min.css"
import {
  finalPopulation,
  initPopulation,
  LeslieMatrix,
  LMPotential,
} from "@/math/leslie"
import { useState } from "react"

const MathCalculus = () => {
  const [time, setTime] = useState(1)

  const handleTime = (event: any) => {
    let { value, min, max } = event.target
    setTime(Math.max(Number(min), Math.min(Number(max), Number(value))))
  }

  const aM = [
    [0, 0.75, 57],
    [1.8, 0.91, 60],
    [2.59, 0, 33],
  ]

  const No: number[] = initPopulation(aM)
  const L: number[][] = LeslieMatrix(aM)
  const LMP: number[][] = LMPotential(LeslieMatrix(aM), time)
  const Nf: number[] = finalPopulation(aM, time)

  return (
    <section className="col-span-2 lg:col-span-1 h-min p-5 md:p-10 flex flex-col gap-4 items-center bg-white sm:rounded-2xl shadow-2xl">
      {/* TITTLE */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold underline">
          Cálculo poblacional
        </h2>
        <small className="text-xs sm:text-sm md:text-base italic">
          Estimación de crecimiento poblacional al año &#34;t&#34;
        </small>
      </div>
      {/* INPUT LABEL */}
      <label className="px-5 py-3 flex gap-2 sm:gap-4 bg-gradient-to-tr from-lime-100 to-lime-500 text-sm sm:text-base md:text-lg rounded-xl shadow-lg">
        <CalculatorOutlineIcon styles="size-5 sm:size-6" /> <b>Ingresa un año:</b>
        <input
          className="w-min pl-2.5 focus:outline-none placeholder:text-xs sm:placeholder:text-sm border border-gray-900 rounded-lg"
          type="number"
          placeholder="Máx 50"
          min={1}
          max={50}
          onChange={handleTime}
        />
      </label>
      <div className="w-[75%] my-2 h-0.5 bg-gray-900 rounded-lg" />
      {/* CALCULUS */}
      <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-sm md:text-base">
        <div className="px-4 py-2 border border-gray-900 bg-yellow-100 rounded-xl shadow">
          <InlineMath math={`{L^{t}}\\times{N(0)}`} />
        </div>
        <InlineMath math={`{${p3x3M(L)}^{${time}}} \\times ${p3x1M(No)}`} />
        <InlineMath
          math={`${p3x3M(LMP)} \\times ${p3x1M(No)} = ${p3x1M(Nf)}`}
        />
      </div>
      <div className="w-[75%] my-2 h-0.5 bg-gray-900 rounded-lg" />
      {/* RESULTS */}
      <div className="p-5 bg-gradient-to-tr from-lime-100 to-lime-500 rounded-xl shadow-lg">
        <h3 className="text-sm sm:text-base md:text-lg font-bold underline">
          Población al año {time}:
        </h3>
        <ul className="mt-3 ml-5 list-disc flex flex-col gap-3 text-xs sm:text-sm md:text-base">
          {["Juveniles", "Adultos Jóvenes", "Adultos Maduros"].map(
            (el, index) => {
              let percentage = (Nf[index] / aM[index][2] - 1) * 100
              return (
                <li key={index}>
                  Los <b>{el}</b> han{" "}
                  <u>{percentage < 0 ? "disminuido" : "aumentado"}</u> a{" "}
                  <b>{Nf[index].toFixed(0)} individuos</b>; es decir,{" "}
                  <u>{percentage < 0 ? "disminuyeron" : "aumentaron"}</u> en un{" "}
                  <b>{Math.abs(Number(percentage.toFixed(2)))}%</b> respecto a su
                  población inicial.
                </li>
              )
            }
          )}
        </ul>
      </div>
    </section>
  )
}

export default MathCalculus

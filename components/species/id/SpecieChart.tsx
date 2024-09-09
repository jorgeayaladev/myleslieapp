import { LineChart } from "@/components/Charts"
import { CalculatorOutlineIcon } from "@/components/Icons"
import { chartLeslieData } from "@/math/chart"
import { useState } from "react"

const SpecieChart = () => {
  const [time, setTime] = useState(6)

  const handleTime = (event: any) => {
    let { value, min, max } = event.target
    setTime(Math.max(Number(min), Math.min(Number(max), Number(value))))
  }

  const aM = [
    [0, 0.32, 69],
    [1.9, 0.48, 67],
    [2.1, 0, 31],
  ]

  let data = chartLeslieData(time, aM)

  return (
    <section className="col-span-2 lg:col-span-1 p-5 md:p-10 flex flex-col gap-4 items-center bg-white sm:rounded-2xl shadow-2xl">
      {/* TITTLE */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold underline">
          Proyección poblacional
        </h2>
        <small className="text-xs sm:text-sm md:text-base italic">
          Evolución de la población al año "t"
        </small>
      </div>
      {/* INPUT LABEL */}
      <label className="px-5 py-3 flex gap-2 sm:gap-4 bg-gradient-to-tr from-lime-100 to-lime-500 text-sm sm:text-base md:text-lg rounded-xl shadow-lg">
        <CalculatorOutlineIcon styles="size-5 sm:size-6" />{" "}
        <b>Ingresa un año:</b>
        <input
          className="w-min pl-2.5 focus:outline-none placeholder:text-xs sm:placeholder:text-sm border border-gray-900 rounded-lg"
          type="number"
          placeholder="Máx 50"
          min={6}
          max={50}
          onChange={handleTime}
        />
      </label>
      {/* CHART */}
      <div className="mt-5 w-full h-[300px]">
        <LineChart data={data} />
      </div>
      {/* RESULTS */}
      <div className="mt-5 p-5 bg-gradient-to-tr from-lime-100 to-lime-500 rounded-xl shadow-lg">
        <h3 className="text-sm sm:text-base md:text-lg font-bold underline">
          Evolución de la población:
        </h3>
        <ul className="mt-3 ml-5 list-disc flex flex-col gap-3 text-xs sm:text-sm md:text-base">
          {data.labels.map((el, index) => {
            let total = 0
            for (let i = 0; i <= 2; i++) total += data.datasets[i].data[index]
            return (
              <li className="" key={index}>
                Al <b>{el}</b>, la <u>población</u> es de:{" "}
                <i>{data.datasets[0].data[index]} Juveniles</i>
                {", "}
                <i>{data.datasets[1].data[index]} Adultos Jóvenes</i>
                {" y "}
                <i>{data.datasets[2].data[index]} Adultos maduros</i>; siendo un
                total de <b>{total} individuos</b>.
              </li>
            )
          })}
          {}
        </ul>
      </div>
    </section>
  )
}

export default SpecieChart

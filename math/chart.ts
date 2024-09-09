import { finalPopulation } from "./leslie"

const chartColors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 4)",
  "rgb(0, 17, 255)",
  "rgb(255, 179, 0)",
  "rgb(0, 238, 255)",
  "rgb(238, 0, 255)",
  "rgb(179, 255, 0)",
  "rgb(0, 115, 255)",
  "rgb(0, 242, 255)",
  "rgb(43, 0, 255)",
  "rgb(255, 221, 0)",
  "rgb(157, 255, 0)",
]

function getRandomColors() {
  const shuffled = [...chartColors].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export const chartLeslieData = (time: number, aM: number[][]) => {
  let color = getRandomColors()
  let years = [0, 0, 0, 0, 0, time]
  let obj = [
    { label: "Juveniles", data: [0, 0, 0, 0, 0, 0] },
    { label: "Adultos jóvenes", data: [0, 0, 0, 0, 0, 0] },
    { label: "Adultos maduros", data: [0, 0, 0, 0, 0, 0] },
  ]

  // Get years for the chart
  for (let i = 0; i <= 4; i++) {
    years[i] = Math.floor(time / (years.length - 1)) * i
  }

  for (let i = 0; i < years.length; i++) {
    for (let j = 0; j < 3; j++) {
      obj[j].data[i] = parseInt(finalPopulation(aM, years[i])[j].toFixed(0))
    }
  }

  return {
    labels: years.map((year) => `Año ${year}`),
    datasets: obj.map((el, i) => {
      return {
        ...el,
        tension: 0.3,
        borderColor: color[i],
        pointRadius: 6,
        pointBackgroundColor: color[i],
        backgroundColor: `${color[i].slice(0, color[i].length - 1)}, 0.2)`,
      }
    }),
  }
}

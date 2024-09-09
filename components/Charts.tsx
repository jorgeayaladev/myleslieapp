import { useEffect, useRef, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options = {
  fill: true,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "gray",
      },
      grid: {
        color: "gray",
      },
    },
    x: {
      ticks: {
        color: "gray",
      },
      grid: {
        color: "gray",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
}

type ChartTypes = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor: string
    borderColor: string
  }[]
}

export const LineChart = ({ data }: { data: ChartTypes }) => {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState<ChartTypes>({
    labels: [],
    datasets: []
  })

  useEffect(() => {
    const chart = chartRef.current
    if (!chart) {
      return
    }

    setChartData(data)
  })

  return <Line data={chartData} options={options} ref={chartRef} />
}

"use client"

import { Chart } from "@/components/chart"
import CSVDisplay from "@/components/csv-display"
import PredictForm from "@/components/predict-form"
import { useState } from "react"

export default function Dashboard() {
  const [click, setClick] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-300 to-slate-100 py-24 px-4 md:p-24 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Dashboard
        </h1>
        <h2 className="scroll-m-20 mt-4 text-3xl lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0">
          <span className="bg-clip-text text-transparent font-bold bg-gradient-to-tr from-fuchsia-400 to-fuchsia-800">
            Predict
          </span>{" "}
          the Future of Inventory.
        </h2>
      </div>
      <div
        className={`py-4 mx-auto grid w-full lg:grid-cols-2 gap-8 place-items-center`}
      >
        <PredictForm setClick={setClick} click={click} />
        <Chart />
      </div>
      <CSVDisplay setClick={setClick} click={click} />
    </div>
  )
}

"use client"

import { Chart } from "@/components/chart"
import CSVDisplay from "@/components/csv-display"
import PredictForm from "@/components/predict-form"
import { useState } from "react"

export default function Dashboard() {
  const [click, setClick] = useState(false)

  return (
    <div className="p-24 flex flex-col min-h-screen gap-16">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dashboard
        </h1>
        <h2 className="scroll-m-20 mt-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Predict the Future of Inventory.
        </h2>
      </div>
      <div
        className={`py-4 mx-auto grid ${
          click ? "grid-cols-1" : "w-full lg:grid-cols-2"
        } gap-8 place-items-center`}
      >
        <PredictForm setClick={setClick} click={click} />
        {!click && <Chart />}
      </div>
      <CSVDisplay setClick={setClick} click={click} />
    </div>
  )
}

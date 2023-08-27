"use client"

import { Chart } from "@/components/chart"
import CSVDisplay from "@/components/csv-display"
import { PredictionContext } from "@/components/provider/prediction-provider"
import { Sales } from "@/lib/types"
import { useSearchParams } from "next/navigation"
import { useContext } from "react"

export default function page() {
  const data: Sales[] = [
    {
      sales: 400,
      month: "Jan",
    },
    {
      sales: 300,
      month: "Feb",
    },
    {
      sales: 200,
      month: "Mar",
    },
    {
      sales: 278,
      month: "Apr",
    },
    {
      sales: 189,
      month: "Jun",
    },
    {
      sales: 239,
      month: "Jul",
    },
    {
      sales: 400,
      month: "Aug",
    },
    {
      sales: 450,
      month: "Sep",
    },
    {
      sales: 600,
      month: "Oct",
    },
    {
      sales: 578,
      month: "Nov",
    },
    {
      sales: 600,
      month: "Dec",
    },
  ]

  const { specificData } = useContext(PredictionContext)
  console.log(specificData)
  return (
    <main className="min-h-screen pb-24 flex flex-col lg:flex-row pr-16 gap-4 items-center bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="w-11/12">
        <CSVDisplay />
      </div>
      <div className="w-4/5 lg:w-5/12">
        <Chart
          data={data}
          title="Inventory Status"
          description="The Graph showing Inventory status of Product X"
        />
      </div>
    </main>
  )
}

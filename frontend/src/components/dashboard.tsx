"use client"

import { Chart } from "@/components/chart"
import PredictForm from "@/components/predict-form"
import { Sales } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RangeForm from "@/components/range-form"

export default function Dashboard() {
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

  return (
    <div className="dashboard min-h-screen py-24 px-4 md:p-24 flex flex-col gap-8">
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
      <div className={`py-4 mx-auto grid w-full gap-8 place-items-center`}>
        <Tabs
          defaultValue="specific"
          className="w-full flex flex-col items-center h-72 justify-start min-h-screen"
        >
          <TabsList>
            <TabsTrigger value="specific">Specific Date</TabsTrigger>
            <TabsTrigger value="range">Range</TabsTrigger>
          </TabsList>
          <TabsContent value="specific" className="w-full min-h-screen">
            <PredictForm />
          </TabsContent>
          <TabsContent value="range" className="w-full">
            <RangeForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

"use client"

import { DatePicker } from "@/components/date-picker"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Data, Sales } from "@/lib/types"
import Link from "next/link"
import { FormEvent, useContext, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { PredictionContext } from "@/components/provider/prediction-provider"
import CSVDisplay from "@/components/csv-display"
import { Chart } from "@/components/chart"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PredictForm() {
  const sampleData: Sales[] = [
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

  const [data, setData] = useState<Data>()

  const { specificData, setSpecificData } = useContext(PredictionContext)

  const {
    isInitialLoading,
    error,
    data: res,
    refetch,
  } = useQuery({
    queryKey: ["cateogry-prediction"],
    enabled: false,
    queryFn: () =>
      fetch(
        `http://localhost:8000/api/v1/category-prediction?city=${data?.city}&date=${data?.date}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((res) => res.json()),
  })

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await refetch()

    setSpecificData?.(res)
  }

  console.log({ res, specificData, data })

  return (
    <div className="flex flex-col">
      <div className="mx-auto flex">
        <form onSubmit={handleFormSubmit} className="w-full mt-4">
          <div className="transition-all w-full flex flex-col lg:flex-row items-center gap-4">
            <div className="w-full border-black border">
              <Select
                name="city"
                onValueChange={(e) => setData({ ...data, city: e })}
              >
                <SelectTrigger className="min-w-[280px] mx-auto">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full border-black border">
              <DatePicker data={data} setData={setData} />
            </div>
            <Button type="submit" className="max-w-md w-full">
              {/* <Link href="/inventory" className="w-full"> */}
              Predict Data
              {/* </Link> */}
            </Button>
          </div>
        </form>
      </div>
      {res && data ? (
        <div>
          {/* <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Inventory Generated
          </h2> */}
          <div className="w-full grid lg:grid-cols-2 mt-16">
            <div className="mx-4 self-center">
              <CSVDisplay data={data} res={res} />
            </div>
            <Card className="bg-gradient-to-tr from-slate-100 to-slate-100 border-2 border-slate-300 shadow-lg shadow-slate-400 flex flex-col ">
              <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Testing things out</CardDescription>
              </CardHeader>
              <CardContent className="flex pb-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    width={150}
                    height={40}
                    data={sampleData}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <Bar dataKey="sales" fill="rgb(192 132 252)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

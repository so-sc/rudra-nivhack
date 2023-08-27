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

export default function PredictForm() {
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

    console.log(res)
    setSpecificData?.(res)
  }

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

  return (
    <>
      <div className="w-full flex mb-16">
        <form onSubmit={handleFormSubmit} className="w-full">
          <div className="transition-all w-full flex flex-col items-center gap-4">
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
      <div>
        {res ? (
          <div className="">
            <CSVDisplay data={data} res={res} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

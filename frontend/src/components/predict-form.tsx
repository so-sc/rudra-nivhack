"use client"

import { DatePicker } from "@/components/date-picker"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Data } from "@/lib/types"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function PredictForm() {
  const [data, setData] = useState<Data>()
  const [response, setResponse] = useState()

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await axios.post(
      `http://localhost:8000/api/v1/category-prediction?city=${data?.city}&date=${data?.date}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    )

    setResponse((prev) => (prev = res.data))
  }
  return (
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
            <Link
              href={{
                pathname: "/inventory",
                query: {
                  data: response,
                },
              }}
              className="w-full"
            >
              Predict Data
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

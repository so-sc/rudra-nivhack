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
import { Data } from "@/lib/types"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

interface Props {
  click: boolean
  setClick: Dispatch<SetStateAction<boolean>>
}

export default function PredictForm({ setClick, click }: Props) {
  const [data, setData] = useState<Data>()

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="w-full flex mb-16">
      <form onSubmit={handleFormSubmit} className="w-full">
        <div
          className={`transition-all w-full flex ${
            click ? "flex-col md:flex-row" : "flex-col"
          } items-center gap-4`}
        >
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
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bhopal">Bhopal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full border-black border">
            <DatePicker data={data} setData={setData} />
          </div>
          <Button
            type="submit"
            className="max-w-md w-full"
            onClick={() => setClick(true)}
          >
            Predict Data
          </Button>
        </div>
      </form>
    </div>
  )
}

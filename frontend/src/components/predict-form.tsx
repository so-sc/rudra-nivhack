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
import { FormEvent, useState } from "react"

export default function PredictForm() {
  const [data, setData] = useState<Data>()

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
  }
  return (
    <div className="w-full">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col items-center gap-4">
          <div>
            <Select name="city">
              <SelectTrigger className="w-[280px] mx-auto">
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
          <div>
            <DatePicker />
          </div>
          <Button type="submit">Predict Data</Button>
        </div>
      </form>
    </div>
  )
}

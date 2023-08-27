import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/date-picker"
import { Data } from "@/lib/types"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"

type RangeData = Data & {
  days?: number
}

export default function RangeForm() {
  const [data, setData] = useState<RangeData>()
  const router = useRouter()

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(data)
    router.push("/range-chart")
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
          <div className="w-full flex gap-8">
            <Slider
              defaultValue={[7]}
              max={29}
              step={1}
              onValueChange={(e) => setData({ ...data, days: e[0] })}
            />
            <p className="basis-1/4 text-right">{data?.days || 7} Days</p>
          </div>
          <Button type="submit" className="max-w-md w-full">
            Get Graph
          </Button>
        </div>
      </form>
    </div>
  )
}

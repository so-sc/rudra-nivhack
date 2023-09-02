import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/date-picker"
import { Data } from "@/lib/types"
import { FormEvent, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useQuery } from "@tanstack/react-query"
import { capitalize, isPastDate } from "@/lib/utils"

type RangeData = Data & {
  days?: number
}

export default function RangeForm() {
  const [data, setData] = useState<RangeData>()
  const [error, setError] = useState<string | null>(null)

  const {
    isInitialLoading,
    error: err,
    data: res,
    refetch,
  } = useQuery({
    queryKey: ["days-predictions"],
    enabled: false,
    queryFn: () =>
      fetch(
        `http://localhost:8000/api/v1/days-predictions?city=${data?.city}&date=${data?.date}&days=${data?.days}`,
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
    console.log(data)
    if (!data?.city || !data.date) {
      setError("Set the required parameters")
      return
    }

    // If the date is older than today then the difference will be negative, so can't predict
    if (isPastDate(data.date)) {
      setError("Please choose future dates for prediction")
      return
    }

    // If days slider is not moved set it default to 7
    if (!data.days) {
      data.days = 7
    }

    refetch()
  }
  console.log(res)

  return (
    <div className="w-11/12 lg:w-1/2 mx-auto mt-2 flex mb-16">
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
            Get Ranged Data
          </Button>
        </div>
        <div className="text-center mt-2 text-lg text-red-500 font-bold">
          {error !== null && <p>{error}</p>}
        </div>
        {res ? (
          <>
            <h2 className="scroll-m-20 mt-8 text-3xl text-center lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0">
              Range of Prediction of products in {capitalize(res.city)}
            </h2>
            <Table className="overflow-x-scroll w-full min-w-[25rem] no-scroll mt-8">
              {/* <TableCaption>Required Inventory.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {res.data.map((item: any) => (
                  <>
                    <TableRow key={item.date}>
                      <TableCell className="font-medium">{item.date}</TableCell>
                      <TableCell className="font-medium">
                        {capitalize(res.city)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.products.map((product: any) => (
                          <div
                            key={product.name}
                            className="border-b last:border-b-0 py-2"
                          >
                            {capitalize(product.name)}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.products.map((product: any) => (
                          <div
                            key={product.name}
                            className="border-b last:border-b-0 py-2"
                          >
                            {product.quantity}
                          </div>
                        ))}
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  )
}

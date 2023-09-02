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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Data, Sales } from "@/lib/types"
import { FormEvent, useContext, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { PredictionContext } from "@/components/provider/prediction-provider"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { capitalize, isPastDate } from "@/lib/utils"

export default function PredictForm() {
  const [data, setData] = useState<Data>()
  const [error, setError] = useState<string | null>(null)

  // TODO: Make context to store the data
  const { specificData, setSpecificData } = useContext(PredictionContext)

  const {
    isInitialLoading,
    error: err,
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
    if (!data?.city || !data.date) {
      setError("Set the required parameters")
      return
    }

    // If the date is older than today then the difference will be negative, so can't predict
    if (isPastDate(data.date)) {
      setError("Please choose future dates for prediction")
      return
    }

    setError(null)
    refetch()
  }

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
      <div className="text-center mt-2 text-lg text-red-500 font-bold">
        {error !== null && <p>{error}</p>}
      </div>
      {res && error === null ? (
        <div>
          <div className="w-full grid lg:grid-cols-2 mt-16">
            <div className="mx-4 self-center">
              <Table className="overflow-x-scroll min-w-[25rem] no-scroll">
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Quantity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {res.products.map((product: any) => (
                    <TableRow key={product.name}>
                      <TableCell className="font-medium">
                        {/* Capitalizing the first letter of the product */}
                        {capitalize(product.name)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {capitalize(res.city)}
                      </TableCell>
                      <TableCell className="font-medium">{res.date}</TableCell>
                      <TableCell className="font-medium">
                        {product.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Card className="bg-gradient-to-tr from-slate-100 to-slate-100 border-2 border-slate-300 shadow-lg shadow-slate-400 flex flex-col ">
              <CardHeader>
                <CardTitle>Inventory for {capitalize(res.city)}</CardTitle>
                <CardDescription>
                  Here is the demand of products at {res.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex pb-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart width={150} height={40} data={res.products}>
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    <span className="font-bold">
                                      {payload[0].payload.name}
                                    </span>
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    Quantity - {payload[0].payload.quantity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        }

                        return null
                      }}
                    />
                    <XAxis dataKey="name" />
                    <Bar dataKey="quantity" fill="rgb(192 132 252)" />
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

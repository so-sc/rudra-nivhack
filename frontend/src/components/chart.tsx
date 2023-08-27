"use client"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sales } from "@/lib/types"

interface ChartProps {
  data: Sales[]
  title: string
  description: string
}

export function Chart({ data, title, description }: ChartProps) {
  return (
    <Card className="bg-gradient-to-tr from-slate-100 to-slate-100 border-2 border-slate-300 shadow-lg shadow-slate-400 flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="aspect-video h-[50%]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              sales -{" "}
                              <span className="font-bold">
                                {payload[0].payload.month}
                              </span>
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                          {/* <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Today
                            </span>
                            <span className="font-bold">
                              {payload[1].value}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    )
                  }

                  return null
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="sales"
                activeDot={{
                  r: 6,
                  style: { fill: "lightpink" },
                }}
                style={{
                  stroke: "fuchsia",
                }}
                dot={{
                  r: 4,
                }}
              />
              {/* <Line
                type="monotone"
                dataKey="today"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: "var(--theme-primary)" },
                }}
              /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

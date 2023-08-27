import { Dispatch, SetStateAction, createContext, useState } from "react"

interface Products {
  iphone: number
  kurtha: number
  umbrella: number
}

type Success = 0 | 1

export type SpecificData = Products & {
  success: Success
}

type DateAndProducts = {
  date: string
  product: Products
}

export interface RangedData {
  success: Success
  data: DateAndProducts[]
}

interface PredictionData {
  specificData: SpecificData | null
  setSpecificData: Dispatch<SetStateAction<SpecificData | null>>
  rangedData: RangedData | null
  setRangedData: Dispatch<SetStateAction<RangedData | null>>
}

export const PredictionContext = createContext<Partial<PredictionData>>({})

function PredictionProvider({ children }: { children: React.ReactNode }) {
  const [specificData, setSpecificData] = useState<SpecificData | null>(null)
  const [rangedData, setRangedData] = useState<RangedData | null>(null)

  return (
    <PredictionContext.Provider
      value={{ specificData, setSpecificData, rangedData, setRangedData }}
    >
      {children}
    </PredictionContext.Provider>
  )
}

export default PredictionProvider

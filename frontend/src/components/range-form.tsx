import { Data } from "@/lib/types"
import { FormEvent, useState } from "react"

export default function RangeForm() {
  const [data, setData] = useState<Data>()

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="w-full flex mb-16">
      <form onSubmit={handleFormSubmit} className="w-full">
        <div
          className={`transition-all w-full flex flex-col items-center gap-4`}
        ></div>
      </form>
    </div>
  )
}

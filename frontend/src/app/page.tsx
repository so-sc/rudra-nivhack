import CSVDisplay from "@/components/csv-display"
import PredictForm from "@/components/predict-form"

export default function Home() {
  return (
    <main>
      <div className="p-24 flex flex-col min-h-screen gap-16">
        <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Dashboard: The more you know.
        </h1>
        <div className="w-full mx-auto grid md:grid-cols-2 place-items-center">
          <PredictForm />
          <CSVDisplay />
        </div>
      </div>
    </main>
  )
}

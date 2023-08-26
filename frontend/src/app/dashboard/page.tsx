import CSVDisplay from "@/components/csv-display"
import PredictForm from "@/components/predict-form"

export default function page() {
  return (
    <section className="grid md:grid-cols-2">
      <PredictForm />
      <CSVDisplay />
    </section>
  )
}

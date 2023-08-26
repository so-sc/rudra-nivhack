import { FormEvent } from "react"

export default function PredictForm() {
  function handleFormSubmit(formData: FormData) {
    console.log(formData)
  }
  return (
    <div>
      <form action={handleFormSubmit}>
        <div></div>
      </form>
    </div>
  )
}

import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-50 to-purple-100">
      <SignIn />
    </div>
  )
}

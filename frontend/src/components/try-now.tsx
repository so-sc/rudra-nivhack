"use client"

import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function TryNow() {
  const { isSignedIn } = useUser()
  return (
    <Button asChild className="mt-2 border-white w-1/3">
      <Link href={!isSignedIn ? "/sign-in" : "/dashboard"}>Try Now!</Link>
    </Button>
  )
}

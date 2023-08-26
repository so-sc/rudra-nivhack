import Hero from "@/components/assets/Hero"
import TryNow from "@/components/try-now"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/siteConfig"
import Link from "next/link"

export default function Landing() {
  return (
    <section className="py-24 px-4 md:p-24 min-h-screen flex drop-shadow-lg items-center overflow-hidden">
      <div className="px-8 flex flex-col gap-2 text-left items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {siteConfig.name}
        </h1>
        <h2 className="scroll-m-20 text-3xl tracking-tight transition-colors first:mt-0">
          Demand Forecasting and Inventory Management
        </h2>
        {/* <p className="scroll-m-20 text-xl tracking-tight">
          Explore the synergy of Inventory Management & Demand Forecasting with
          us. Elevate operational efficiency, cut costs, and enhance customer
          contentment through data-driven insights. Join for smarter inventory
          strategies and predictive accuracy in a dynamic market.
        </p> */}
        <TryNow />
      </div>
      <div>
        <Hero />
      </div>
      {/* <img
      src="https://source.unsplash.com/random?graph-sales"
      alt="Random Datas"
      className="min-h-screen object-cover -z-10"
    /> */}
    </section>
  )
}

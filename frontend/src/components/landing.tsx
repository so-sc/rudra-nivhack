import Hero from "@/components/assets/Hero"
import TryNow from "@/components/try-now"
import { siteConfig } from "@/config/siteConfig"

export default function Landing() {
  return (
    <section className="py-24 px-4 md:p-24 min-h-screen flex flex-col lg:flex-row drop-shadow-lg items-center overflow-hidden">
      <div className="px-8 flex w-3/5 flex-col gap-2 text-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {siteConfig.name}
        </h1>
        <h2 className="scroll-m-20 text-2xl tracking-tight transition-colors first:mt-0">
          Demand Forecasting and Inventory Management
        </h2>
        <p className="w-4/5 scroll-m-20 tracking-tight">
          Explore the synergy of Inventory Management & Demand Forecasting with
          us. Elevate operational efficiency, cut costs, and enhance customer
          contentment through data-driven insights.
        </p>
        <TryNow />
      </div>
      <div className="flex ml-auto">
        <Hero />
      </div>
    </section>
  )
}

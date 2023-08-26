import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/siteConfig"
import Link from "next/link"

export default function Landing() {
  return (
    <section className="landing container p-24 min-h-screen flex drop-shadow-lg text-white items-center">
      {/* <img src="/graph_bg.jpg" alt="Graph Growing in Background" /> */}
      <div className="flex flex-col gap-2 text-left items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {siteConfig.name}
        </h1>
        <h2 className="scroll-m-20 text-3xl tracking-tight transition-colors first:mt-0">
          Demand Forecasting and Inventory Management
        </h2>
        <p className="w-2/3 scroll-m-20 text-xl tracking-tight">
          Explore the synergy of Inventory Management & Demand Forecasting with
          us. Elevate operational efficiency, cut costs, and enhance customer
          contentment through data-driven insights. Join for smarter inventory
          strategies and predictive accuracy in a dynamic market.
        </p>
        <Button
          asChild
          className="mt-2 border-white w-1/3 bg-white text-black hover:bg-slate-200 focus:outline-ring ring-offset-4"
        >
          <Link href="/dashboard">Try Now!</Link>
        </Button>
      </div>
      {/* <img
      src="https://source.unsplash.com/random?graph-sales"
      alt="Random Datas"
      className="min-h-screen object-cover -z-10"
    /> */}
    </section>
  )
}




import BtnDarkPill from "@/components/Buttons/BtnDarkPill"
import BtnPrimary from "@/components/Buttons/BtnPrimary"
import ArtistTarget from "@/components/Home/ArtistTarget"
import Frustrated from "@/components/Home/Frustrated"
import Hero from "@/components/Home/Hero"
import Testimonial from "@/components/Home/Testimonial"
import ThreeCards from "@/components/Home/ThreeCards"
import ThreeSteps from "@/components/Home/ThreeSteps"
import Link from "next/link"
export default function Home() {

  return (
    <>
      {/* First text section */}
      <Hero />
      {/* Studio image */}
      <div className="w-full h-40 bg-cover rounded	px-6 box-border md:h-80" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }} />
      {/* Second text section */}
      <Frustrated />
      <Testimonial />
      <ThreeSteps />
      <ThreeCards />
      <ArtistTarget />
    </>
  )
}

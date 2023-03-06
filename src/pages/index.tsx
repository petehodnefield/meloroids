


import BtnDarkPill from "@/components/Buttons/BtnDarkPill"
import BtnPrimary from "@/components/Buttons/BtnPrimary"
import ArtistTarget from "@/components/Home/ArtistTarget"
import Frustrated from "@/components/Home/Frustrated"
import Hero from "@/components/Home/Hero"
import Testimonial from "@/components/Home/Testimonial"
import ThreeCards from "@/components/Home/ThreeCards"
import ThreeSteps from "@/components/Home/ThreeSteps"
import Image from "next/image"
import Link from "next/link"
export default function Home() {

  return (
    < div className="flex justify-center flex-col items-center">
      <div className="lg:flex w-full lg:max-w-58 items-center justify-between lg:py-12">
        {/* First text section */}
        <Hero />
        {/* Studio image */}
        <img
          src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          className=" w-full h-40 object-cover rounded	box-border md:h-88 lg:rounded-full lg:w-88 lg:h-88" />
      </div>
      {/* Second text section */}
      <Frustrated />
      <Testimonial />
      <ThreeSteps />
      <ThreeCards />
      <ArtistTarget />
    </div>
  )
}

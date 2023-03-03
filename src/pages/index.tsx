


import BtnDarkPill from "@/components/Buttons/BtnDarkPill"
import BtnPrimary from "@/components/Buttons/BtnPrimary"
import Testimonial from "@/components/Home/Testimonial"
import ThreeCards from "@/components/Home/ThreeCards"
import ThreeSteps from "@/components/Home/ThreeSteps"
import Link from "next/link"
export default function Home() {

  return (
    <>
      <article >
        {/* First text section */}
        <section className="flex flex-col items-center justify-center text-center pt-10 pb-8 px-6">
          <h1 className="text-2.5 font-semibold mb-4">Become a <span className="text-primary"> <br />literate</span> producer.</h1>
          <div>
            <h2 className="text-primary text-1.125 font-semibold  mb-4">Gain an unfair advantage</h2>
            <p className="text-0.875 mb-4">Meloroids is the worlds best resource to gain instant inspiration for creating melodies. Finally learn the music theory behind your favorite songs.</p>
          </div>
          <BtnDarkPill buttonText="Learn more" />
        </section>

        {/* Studio image */}
        <div className="w-full h-40 bg-cover rounded	px-6 box-border" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }} />

        {/* Second text section */}
        <section className="pt-7 pb-12 flex flex-col items-center px-6">
          <h2 className="text-2 font-semibold mb-3">
            With Meloroids, you will <span className="text-primary">finally begin to understand music theory</span>
          </h2>
          <div className="mb-6">
            <p className="text-1 italic mb-2">How many times have you tried to learn music theory?</p>
            <p className="text-1 italic">How many times have you made a genuine effort to try to learn how chords are formed, how to make chord progressions, only to become increasingly frustrated?</p>
          </div>

          {/* Frustrated image */}
          <div className="w-64 h-64 bg-cover rounded	" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }} />

          <div className="py-10">
            <p className="text-0.875 mb-4">I know the struggle producers face trying to grasp the concepts of music theory. The internet is filled with teachers who overcomplicate concepts, and most producers don’t realize the true power of understanding music theory</p>
            <p className="text-0.875">Meloroids is a one-of-a-kind platform that will provide you with instant inspiration for whatever genre you are trying to produce. You will learn and immediately apply music theory concepts.</p>
          </div>
          <BtnPrimary buttonText="How it works" />
        </section>

        <Testimonial />
        <ThreeSteps />
        <ThreeCards />
      </article>
    </>
  )
}

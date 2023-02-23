
import BtnPrimary from "@/components/Buttons/BtnPrimary"
import Train from "@/components/Home/Train"
import TwoColumns from "@/components/Home/TwoColumns"
import Link from "next/link"
export default function Home() {

  return (
    <>
      <div className="py-12 px-6">
        <h1 className="text-2 mb-3">Become a <br /> <span className="font-bold">literate</span> producer.</h1>
        <h3 className="text-1.125 text-primary mb-3">Gain an unfair advantages</h3>
        <p className="text-0.875 mb-4">Meloroids has the best data on what artists use in their songs. Meloroids will help you start landing placements.</p>
        <Link href={'/#train'}><BtnPrimary buttonText='Learn more'></BtnPrimary></Link>
      </div>

      <TwoColumns />
      <Train />
    </>
  )
}

import React from "react";
import heroImage from "../../../public/assets/images/hero-img.png";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ authorized }) => {
  const btn =
    "h-12 w-48 rounded text-1 font-semibold flex items-center justify-center";
  const btnPrimary = "bg-primary";
  const btnOutline = "bg-transparent border-1 border-white";
  return (
    <div className="relative flex justify-center flex-col items-center">
      <Image
        src={heroImage}
        alt="A guitar and keyboard floating in space"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 hero__img"
      />
      <div className="relative w-full xl:h-600 flex items-center xl:max-w-70 xl:p-12">
        {/* Background Image */}
        <div className="py-12 px-6 relative text-white text-center max-w-660 flex flex-col items-center">
          <h1 className="text-3 font-semibold mb-6">
            Music Production Simplified
          </h1>
          <h2 className="text-1.5 font-medium mb-8">
            Focus on what <span className="font-bold">truly</span> matter
          </h2>
          <h3 className="text-1.125 font-medium mb-8">
            Meloroids is the{" "}
            <span className="font-bold ">antidote to beat block</span>, allowing
            producers to be able to focus on producing their highest quality
            work.
          </h3>
          <Link
            href={`${authorized ? "/quickie" : "/signup"}`}
            className={`${btn} ${btnPrimary}`}
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

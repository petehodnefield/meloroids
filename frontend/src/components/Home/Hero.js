import React, { useState, useContext } from "react";
import { LoginContext } from "@/pages/_app";
import heroImage from "../../../public/assets/images/hero-img.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const btn =
    "h-12 w-48 rounded text-1 font-semibold flex items-center justify-center";
  const btnPrimary = "bg-primary";
  const btnOutline = "bg-transparent border-1 border-white";
  return (
    <div className="relative flex justify-center flex-col items-center lg:h-500">
      {/* Background Image */}
      <Image
        src={heroImage}
        priority={true}
        alt="A guitar and keyboard floating in space"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 hero__img"
      />
      {/* Hero text */}
      <div className="relative w-full xl:h-600 flex justify-center lg:justify-center items-center  lg:max-w-48 xl:max-w-70 lg:w-full lg:px-0 ">
        <div className="py-12 px-6 md:py-16 lg:px-0 relative text-white text-center lg:text-left max-w-660 lg:max-w-full lg:w-full flex flex-col items-center lg:items-start">
          <h1 className="text-3 font-semibold mb-6 lg:max-w-660">
            Music Production Simplified
          </h1>
          <h2 className="text-1.5 font-medium mb-8">
            Taking the guess work out of making music.{" "}
          </h2>
          <h3 className="text-1.125 font-medium mb-10 lg:max-w-660">
            Meloroids is the&nbsp;
            <span className="font-bold md:bg-primary md:rounded-full md:px-2 md:py-0.25">
              workflow antidote to beat block
            </span>
            , allowing producers to be able to focus on producing their highest
            quality work.
          </h3>
          <Link
            href={`${loggedIn ? "/quickie" : "/signup"}`}
            className={`${btn} bg-primary`}
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

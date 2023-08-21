import React, { useContext } from "react";
import { LoginContext } from "@/pages/_app";
import Image from "next/image";
import quickieImage from "../../../public/assets/images/quickie.png";
import artistTargetImage from "../../../public/assets/images/artist-target.png";
import targetImage from "../../../public/assets/images/target.png";
import Link from "next/link";
const Features = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  return (
    <section className="min-h-screen w-full flex items-center justify-center features__bg">
      <div className="px-6 py-12 md:py-16 xl:max-w-70 flex flex-col items-center text-center">
        <h2 className="text-1.25 font-semibold text-darklight tracking-widest uppercase mb-2">
          Features
        </h2>
        <h3 className="text-2.5  font-semibold mb-4 lg:mb-8">
          Focus on the Essentials
        </h3>
        {/* Three card container */}

        <div className="flex-col lg:flex-row flex justify-center gap-8 xl:gap-12 md:w-4/5 lg:w-full flex-wrap">
          {/* Artist Target */}
          <Link
            href={"/artist-target"}
            className="hover:opacity-90 duration-200"
          >
            <div className="relative flex flex-col items-center bg-white shadow-3xl rounded-4xl xl:max-w-30 px-4 pt-8 pb-4 md:p-10 xl:p-10">
              <h4 className="text-2.5 font-semibold text-primary mb-4">
                Artist Target
              </h4>
              <p className="text-1.125 font-medium pb-4 md:max-w-660">
                <span className="text-primary font-bold">Artist Target</span>{" "}
                pulls data from real artist songs. It is the fastest, most
                accurate way to write loops in the style of an artist.
              </p>
              <p className="text-1.125 font-medium pb-6 md:max-w-660">
                Loop parameters are generated directly from an artist&apos;s
                discography, allowing you to make loops with pinpoint accuracy.{" "}
              </p>
              <div>
                <Image
                  src={artistTargetImage}
                  alt="A snapshot of Artist Target by Meloroids"
                  className="rounded-2xl features__img"
                />
              </div>
            </div>
          </Link>
          {/* Target */}
          <Link
            href={"/target-setup"}
            className="hover:opacity-90 duration-200"
          >
            <div className="relative flex flex-col items-center bg-white shadow-3xl rounded-4xl xl:max-w-30 px-4 pt-8 pb-4 md:p-10 xl:p-10">
              <h4 className="text-2.5 font-semibold text-primary mb-4">
                Target
              </h4>
              <p className="text-1.125 font-medium pb-4 md:max-w-660">
                <span className="text-primary font-bold">Target</span> provides
                instant inspiration by showing you popular chord progressions
                for different genres.{" "}
              </p>
              <p className="text-1.125 font-medium pb-6 md:max-w-660">
                Constraints are set{" "}
                <span className="italic font-bold text-primary">before</span>{" "}
                you make your music,{" "}
                <span className="font-bold">
                  making writer&#39; block virtually impossible.
                </span>
              </p>
              <div>
                <Image
                  src={targetImage}
                  alt="A snapshot of Target by Meloroids"
                  className="rounded-2xl features__img"
                />
              </div>
            </div>
          </Link>
          {/* Quickie */}
          <Link
            href={`${loggedIn ? "/quickie" : "/login"}`}
            className="hover:opacity-90 duration-200"
          >
            <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl  xl:max-w-30 px-4 pt-8 pb-4 md:p-10 xl:p-10">
              <h4 className="text-2.5 font-semibold text-primary mb-4">
                Quickie
              </h4>
              <p className="text-1.125 font-medium pb-4 md:max-w-660">
                <span className="font-bold">We all know</span> how annoying it
                is to come up with a name for our beat every time we sit down to
                make music.
              </p>
              <p className="text-1.125 font-medium pb-6 md:max-w-660">
                <span className="font-bold text-primary">Quickie</span> is
                beat/loop name generator that perfectly formats your files,
                allowing you to focus all your energy on making music.
              </p>
              <div className="w-full h-full">
                <Image
                  src={quickieImage}
                  alt="A snapshot of Quickie by Meloroids"
                  className="rounded-2xl features__img"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;

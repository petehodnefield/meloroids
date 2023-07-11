import React from "react";
import Image from "next/image";
import quickieImage from "../../../public/assets/images/quickie.png";
import trainImage from "../../../public/assets/images/train.png";
const Features = () => {
  return (
    <section className="xl:h-1000 flex items-center justify-center features__bg">
      <div className="px-6 py-12 xl:max-w-70 flex flex-col items-center text-center">
        <h2 className="text-1.5 font-semibold text-darklight tracking-widest uppercase mb-2">
          Features
        </h2>
        <h3 className="text-2.5 xl:text-3 font-semibold mb-4 xl:mb-8">
          Focus on the Essentials
        </h3>
        {/* Two card container */}
        <div className="flex-col flex gap-8 xl:gap-12">
          {/* Quickie */}
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl xl:max-w-30 px-4 pt-8 pb-4 xl:p-10">
            <h4 className="text-2.5 font-semibold text-primary mb-4">
              Quickie
            </h4>
            <p className="text-1.125 font-medium pb-4">
              <span className="font-bold">We all know</span> how annoying it is
              to come up with a name for our beat every time we sit down to make
              music.
            </p>
            <p className="text-1.125 font-medium pb-6">
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
          {/* Train */}
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl xl:max-w-30 p-4 xl:p-10">
            <h4 className="text-2.5 font-semibold text-primary mb-4">Train</h4>
            <p className="text-1.125 font-medium pb-4">
              <span className="text-primary font-bold">Train</span> provides
              instant inspiration by showing you popular chord progressions for
              different genres.{" "}
            </p>
            <p className="text-1.125 font-medium pb-6">
              Constraints are set{" "}
              <span className="italic font-bold text-primary">before</span> you
              make your music,{" "}
              <span className="font-bold">
                making writer&#39; block virtually impossible.
              </span>
            </p>
            <div>
              <Image
                src={trainImage}
                alt="A snapshot of Train by Meloroids"
                className="rounded-2xl features__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

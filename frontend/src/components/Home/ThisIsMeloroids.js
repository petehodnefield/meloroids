import React from "react";
import { Icon } from "@iconify/react";
const ThisIsMeloroids = () => {
  return (
    <section className="features__bg min-h-800 w-full flex items-center justify-center">
      <div className="px-6 py-12 md:py-16 md:max-w-660 flex flex-col items-center text-center">
        {" "}
        <h2 className="text-1.25 font-semibold text-darklight tracking-widest uppercase mb-4">
          This is Meloroids
        </h2>{" "}
        <h3 className="text-2.5  font-semibold mb-4 lg:mb-8">
          Melody on Steroids
        </h3>
        <p className="font-medium text-1.125 mb-6">
          We believe there are 2 things holding back <br /> producers from peak
          performance:
        </p>
        <div className="flex flex-col items-start gap-6 mb-10">
          <div className="flex items-center gap-2 font-semibold">
            1.{" "}
            <div className="bg-primaryFaded h-16 w-16 rounded-xl flex items-center justify-center">
              <Icon
                icon="majesticons:data-line"
                className="text-2.5 text-primary"
              />
            </div>
            Data
          </div>
          <div className="flex items-center gap-2 font-semibold">
            2.{" "}
            <div className="bg-primaryFaded h-16 w-16 rounded-xl flex items-center justify-center">
              <Icon
                icon="game-icons:handcuffs"
                className="text-2.5 text-primary"
              />
            </div>
            Contraints
          </div>
        </div>
        <div className="mb-10 text-left">
          <p className="font-medium text-1.125 mb-4">
            <span className="font-bold">Meloroids</span> is the fastest, most
            accurate way to write melodies and the best way to avoid beat block.
          </p>
          <p className="font-medium text-1.125">
            Through{" "}
            <span className="text-primary font-semibold">
              data and constraints,
            </span>{" "}
            we help music producers spend less time on the trivial parts of
            music production (like coming up with a name for your beat), and
            more time writing hit melodies.
          </p>
        </div>
        <a
          href="#features"
          className="h-12 bg-dark w-full md:w-48 rounded text-white cursor-pointer flex items-center justify-center"
        >
          How it works
        </a>
      </div>{" "}
    </section>
  );
};

export default ThisIsMeloroids;

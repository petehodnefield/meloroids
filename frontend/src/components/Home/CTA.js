import React from "react";
import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../../public/assets/images/cta-img.png";
const CTA = ({ authorized }) => {
  const btn =
    "h-12 w-full md:w-48 xl:w-48 rounded text-1 font-semibold flex items-center justify-center";
  const btnPrimary = "bg-primary";
  const btnOutline = "bg-transparent border-1 border-white";
  return (
    <section className="py-12 px-6 md:py-16 relative lg:h-400 flex justify-center">
      <Image
        src={ctaImage}
        alt="A music studio"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 cta__img"
      />
      <div className="relative text-white flex flex-col items-center justify-center text-center">
        <h2 className="text-3 font-semibold mb-4">Become a better producer!</h2>
        <h3 className="max-w-660 text-1.25 font-medium mb-8">
          Join the growing community of producers that are focusing on what
          truly matters. Ignite your creativity through minimalism.
        </h3>
        <div className="flex flex-col items-center justify-center md:flex-row w-full gap-4 xl:gap-8">
          <Link
            className={`${btn} ${btnPrimary}`}
            href={`${authorized ? "/quickie" : "/signup"}`}
          >
            Get started
          </Link>
          <Link className={`${btn} ${btnOutline}`} href={"/"}>
            Try the demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

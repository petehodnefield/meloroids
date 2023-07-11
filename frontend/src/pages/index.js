import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import quickieImage from "../../public/assets/images/quickie.png";
import trainImage from "../../public/assets/images/train.png";
import ctaImage from "../../public/assets/images/cta-img.png";
import Auth from "utils/auth";
import Hero from "@/components/Home/Hero";
import Features from "../components/Home/Features";
import CTA from "../components/Home/CTA";
export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const btn =
    "h-12 w-48 rounded text-1 font-semibold flex items-center justify-center";
  const btnPrimary = "bg-primary";
  const btnOutline = "bg-transparent border-1 border-white";

  useEffect(() => {
    setHydrated(true);
    Auth.loggedIn() ? setAuthorized(true) : setAuthorized(false);
  }, []);

  return (
    <div>
      {/* Hero section */}
      <Hero authorized={authorized} />

      {/* Features section */}
      <Features />
      {/* CTA Section */}
      <CTA authorized={authorized} />
    </div>
  );
}

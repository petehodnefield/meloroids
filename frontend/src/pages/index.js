"use client";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "./_app";
import Image from "next/image";
import Link from "next/link";
import quickieImage from "../../public/assets/images/quickie.png";
import trainImage from "../../public/assets/images/train.png";
import ctaImage from "../../public/assets/images/cta-img.png";
import Auth from "utils/auth";
import Hero from "@/components/Home/Hero";
import AuthHome from "@/components/Home/AuthHome";
import Features from "../components/Home/Features";
import CTA from "../components/Home/CTA";
export default function Home() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <div>
      {loggedIn ? (
        <AuthHome />
      ) : (
        <div>
          {/* Hero section */}
          <Hero />
          {/* Features section */}
          <Features />
          {/* CTA Section */}
          <CTA />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const checkAuth = () => {
    if (Auth.loggedIn()) {
      return "Logged in";
    } else return "Not logged in";
  };

  return {
    props: {
      auth: { auth: checkAuth() },
    },
  };
}

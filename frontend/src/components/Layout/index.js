import React, { useState, useContext } from "react";
import { NavigationContext } from "@/pages/_app";
import Header from "../Header";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import { Plus_Jakarta_Sans } from "@next/font/google";
import Auth from "utils/auth";
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Layout({ children, pageProps }) {
  const [navSelected, setNavSelected] = useState("Home");
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);
  const [isOpen, setIsOpen] = useState(false);

  const capitalizeNav =
    navigationSelected.charAt(0).toUpperCase() + navigationSelected.slice(1);

  return (
    <>
      <Head>
        <title>{capitalizeNav}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        onClick={() => setIsOpen(false)}
        className={`min-h-screen ${plus_jakarta_sans.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

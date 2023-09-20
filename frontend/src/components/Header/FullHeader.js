import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { NavigationContext } from "@/pages/_app";
import logoFull from "../../../public/assets/logo/logo-full-white.png";
import Nav from "./Nav";

const FullHeader = () => {
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);
  return (
    <header className="hidden bg-primary lg:flex h-24  items-center justify-between px-48 w-full header-w xl:px-0">
      <div className="h-10 mb-2 ">
        <Link
          onClick={() => setNavigationSelected("home")}
          className="w-full h-full"
          href="/"
        >
          <Image
            priority={false}
            src={logoFull}
            alt="Meloroids"
            className="h-full w-full"
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default FullHeader;

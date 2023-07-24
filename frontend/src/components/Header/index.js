import React, { useState, useContext } from "react";
import { NavigationContext } from "@/pages/_app";
import FullHeader from "./FullHeader";
import HamburgerMenu from "./HamburgerMenu";
import MobileHeader from "./MobileHeader";

const Header = ({ isOpen, setIsOpen }) => {
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);

  return (
    <div className="relative lg:w-full flex lg:justify-center bg-primary">
      <MobileHeader setIsOpen={setIsOpen} isOpen={isOpen}></MobileHeader>
      <FullHeader></FullHeader>

      {isOpen ? <HamburgerMenu setIsOpen={setIsOpen} /> : ""}
    </div>
  );
};

export default Header;

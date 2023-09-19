import React, { useContext } from "react";
import { LoginContext, NavigationContext } from "@/pages/_app";

import logoSmall from "../../../public/assets/logo/logo-small-white.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HamburgerMenu from "./HamburgerMenu";

const MobileHeader = ({ isOpen, setIsOpen }) => {
  const hoverStyles = "hover:opacity-80 hover:cursor-pointer duration-200";
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);

  return (
    <div className=" h-20 bg-primary flex   items-center justify-center  shadow-md border-secondary py-4 w-full  lg:hidden">
      <Icon
        className={`absolute my-auto left-4 text-2  ${hoverStyles}
                    ${isOpen ? "hidden" : "text-white"}
                    `}
        icon="ic:twotone-menu"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="h-12 w-12">
        <Link
          className="h-full w-full"
          href="/"
          onClick={() => setNavigationSelected("home")}
        >
          <Image
            src={logoSmall}
            alt="Meloroids logo"
            className="h-full w-full "
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;

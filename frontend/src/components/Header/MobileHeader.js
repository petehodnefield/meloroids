import React, { useState, useEffect, useContext } from "react";
import { LoginContext, NavigationContext } from "@/pages/_app";
import { useQuery } from "@apollo/client";
import { ME } from "utils/queries";
import logoSmall from "../../../public/assets/logo/logo-small-white.png";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HamburgerMenu from "./HamburgerMenu";
import Loading from "../Loading/LoadingWhiteText";
import Error from "../Error/Error";

const MobileHeader = ({ isOpen, setIsOpen }) => {
  const hoverStyles = "hover:opacity-80 hover:cursor-pointer duration-200";
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);
  const [username, setUsername] = useState("");
  const { loading, data, error } = useQuery(ME);

  useEffect(() => {
    if (loggedIn) {
      const username = data.me.username;
      const firstLetterFromUsername = username.split("")[0];
      setUsername(firstLetterFromUsername);
    }
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className=" h-20 bg-primary flex   items-center justify-center  shadow-md border-secondary py-4 w-full  lg:hidden">
      <Icon
        className={`absolute my-auto left-4 text-2  ${hoverStyles}
                    ${isOpen ? "hidden" : "text-white"}
                    `}
        icon="ic:twotone-menu"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="h-12 w-8">
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
      {loggedIn ? (
        <Link
          href={"/"}
          onClick={() => setNavigationSelected("home")}
          className="text-white absolute right-8 text-1.125 font-semibold h-10 w-10 rounded-full border-1 border-white flex items-center justify-center"
        >
          {username}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileHeader;

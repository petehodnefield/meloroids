import React, { useState, useEffect, useContext } from "react";
import { LoginContext, NavigationContext } from "@/pages/_app";
import { Icon } from "@iconify/react";
import logoSmall from "../../../public/assets/logo/logo-small-white.png";
import Image from "next/image";
import Link from "next/link";
import Auth from "utils/auth";

const HamburgerMenu = ({ setIsOpen }) => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);

  const liStyle =
    "h-16  flex items-center justify-start border-b-1 w-full text-white text-1 font-semibold bg-dark ";
  const linkStyle =
    "h-full w-full flex items-center pl-6 bg-dark hover:bg-primary duration-200 ";

  const logout = () => {
    Auth.logout();
  };

  return (
    <div className="fixed bg-dark top-0 left-0 h-screen w-80 lg:hidden pull-out flex flex-col justify-start items-start z-50">
      <Icon
        onClick={() => setIsOpen(false)}
        className="text-white text-2 absolute right-6 top-4 hover:cursor-pointer hover:opacity-80 duration-200"
        icon="material-symbols:close-rounded"
      />
      {/* Meloroids small logo */}
      <div className=" mt-4 mb-6 h-12 w-8 ml-8">
        <Image
          src={logoSmall}
          alt="The Meloroids logo consisting of an eight note and a syringe."
          className="h-full w-full"
        />
      </div>

      {/* NavLinks */}
      <ul className="flex flex-col items-start w-full">
        <li className={`${liStyle} border-t-1`}>
          <Link
            className={linkStyle}
            href="/"
            onClick={() => {
              setIsOpen(false);
              setNavigationSelected(loggedIn ? "home" : "login");
            }}
          >
            {loggedIn ? "Dashboard" : "Home"}
          </Link>
        </li>
        <li className={`${liStyle}`}>
          <Link
            className={linkStyle}
            href={loggedIn ? "/target-setup" : "login"}
            onClick={() => {
              setIsOpen(false);
              setNavigationSelected(loggedIn ? "target" : "login");
            }}
          >
            Target
          </Link>
        </li>
        <li className={`${liStyle}`}>
          <Link
            className={linkStyle}
            href={`${loggedIn ? "/quickie" : "/login"}`}
            onClick={() => {
              setIsOpen(false);
              setNavigationSelected(loggedIn ? "quickie" : "login");
            }}
          >
            Quickie
          </Link>
        </li>
        <li className={`${liStyle}    `}>
          {!loggedIn ? (
            <Link
              className={linkStyle}
              onClick={() => setIsOpen(false)}
              href="/login"
            >
              Login
            </Link>
          ) : (
            <Link
              className={linkStyle}
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              href=""
            >
              Logout
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;

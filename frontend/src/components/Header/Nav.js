import Link from "next/link";
import React, { useState, useContext } from "react";

import { LoginContext, NavigationContext } from "@/pages/_app";
import Auth from "utils/auth";

const Nav = () => {
  const liStyle = "text-0.875 font-semibold hover:text-dark duration-200 ";
  const liCircleStyle =
    " h-10 w-10  flex items-center  justify-center text-1.125 font-semibold bg-primary border-1 rounded-full hover:text-dark duration-200 ";
  const loginStyle =
    "font-semibold h-8 bg-white text-primary rounded-full w-24 flex items-center justify-center hover:opacity-90 duration-200";

  const selectedNavItem = " font-semibold   duration-200 ";

  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [username, setUsername] = useState("");

  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);

  const logout = async (e) => {
    e.preventDefault();
    setNavigationSelected("home");
    Auth.logout();
  };
  return (
    <nav>
      <ul className="flex gap-6 items-center text-white">
        <li
          className={`${liStyle} ${
            navigationSelected === "home" || !navigationSelected
              ? selectedNavItem
              : ""
          }`}
        >
          <Link onClick={() => setNavigationSelected("home")} href="/">
            {loggedIn ? "Dashboard" : "Home"}
          </Link>
        </li>{" "}
        <li
          className={`${liStyle}  ${
            navigationSelected === "artist-target" ? selectedNavItem : ""
          }`}
        >
          <Link
            onClick={() => setNavigationSelected(loggedIn ? "data" : "login")}
            href={`${loggedIn ? "/data" : "/login"}`}
          >
            Data{" "}
          </Link>
        </li>
        <li
          className={`${liStyle}  ${
            navigationSelected === "artist-target" ? selectedNavItem : ""
          }`}
        >
          <Link
            onClick={() =>
              setNavigationSelected(loggedIn ? "artist-target" : "login")
            }
            href={`${loggedIn ? "/artist-target" : "/login"}`}
          >
            Artist Target
          </Link>
        </li>
        <li
          className={`${liStyle}  ${
            navigationSelected === "target" ? selectedNavItem : ""
          }`}
        >
          <Link
            onClick={() => setNavigationSelected(loggedIn ? "target" : "login")}
            href={`${loggedIn ? "/target-setup" : "/login"}`}
          >
            Target
          </Link>
        </li>
        <li
          className={`${liStyle}  ${
            navigationSelected === "quickie" ? selectedNavItem : ""
          }`}
        >
          <Link
            onClick={() =>
              setNavigationSelected(loggedIn ? "quickie" : "login")
            }
            href={`${loggedIn ? "/quickie" : "/login"}`}
          >
            Quickie
          </Link>
        </li>
        <li className={`${liStyle}    `}>
          {!loggedIn ? (
            <Link
              onClick={() => setNavigationSelected("login")}
              className={`${loginStyle}`}
              href="/login"
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={(e) => {
                logout(e);
              }}
              className={`${loginStyle}`}
              href=""
            >
              Logout
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

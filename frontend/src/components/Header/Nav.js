import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "utils/queries";
import { LoginContext, NavigationContext } from "@/pages/_app";
import Auth from "utils/auth";
import Loading from "../Loading/LoadingWhiteText";
import Error from "../Error/Error";

const Nav = () => {
  const liStyle = "text-0.875 font-semibold hover:text-dark duration-200 ";
  const liCircleStyle =
    " h-10 w-10  flex items-center  justify-center text-1.125 font-semibold bg-primary border-1 rounded-full hover:text-dark duration-200 ";
  const loginStyle =
    "font-semibold h-8 bg-white text-primary rounded-full w-24 flex items-center justify-center hover:opacity-90 duration-200";

  const selectedNavItem = ' font-semibold   duration-200 before:content-["•"]';

  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [username, setUsername] = useState("");

  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);
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

  const logout = (e) => {
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
        {loggedIn ? (
          <li className={`${liCircleStyle} `}>
            <Link
              className="h-full w-full flex items-center justify-center relative bottom-0.5"
              onClick={() => setNavigationSelected("home")}
              href={`/`}
            >
              {username}
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Nav;

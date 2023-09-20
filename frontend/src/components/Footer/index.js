import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../../../utils/queries";
import { NavigationContext, LoginContext } from "@/pages/_app";
import logoFull from "../../../public/assets/logo/logo-full-white.png";
import Link from "next/link";
import PrivacyPolicy from "./PrivacyPolicy";
import { Icon } from "@iconify/react";
import Auth from "utils/auth";
const Footer = () => {
  const [navigationSelected, setNavigationSelected] =
    useContext(NavigationContext);
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const { client, loading, data, error } = useQuery(ME);

  const [email, setEmail] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const columnStyle =
    "flex flex-col items-center justify-center lg:items-start lg:justify-start 	";

  useEffect(() => {
    const emailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailFormat)) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
  }, [email]);
  const handleFormSubmit = async (e) => {
    if (!emailValidated) {
      e.preventDefault();
      setEmailErrorMessage("Please enter a valid email!");
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    Auth.logout();
    await client.resetStore();
  };
  return (
    <footer className="flex lg:h-325  py-10 items-center text-white justify-center  bg-primary ">
      <div className="w-full lg:w-60 xl:w-70 h-full flex flex-col lg:flex-row items-center justify-center">
        {/* Column 1 */}
        <div className={`${columnStyle} flex-1.33`}>
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-20">
            <div className="h-20">
              <Link
                className="h-full mb-1.5 my-4 lg:h-20 lg:mb-3"
                onClick={() => setNavigationSelected("home")}
                href="/"
              >
                <Image
                  priority="false"
                  className="h-full w-full  object-contain "
                  src={logoFull}
                  alt="Logo for meloroids"
                />
              </Link>
            </div>
            <h2 className="text-1.25 font-bold">
              Music production simplified.
            </h2>
          </div>
          {/* Privacy policy + copyright */}
          <PrivacyPolicy displayClass={"hidden lg:flex"} />
        </div>
        {/* Column 2 */}
        <div className={` ${columnStyle} hidden lg:block lg:flex-1 `}>
          <div className="flex flex-col items-start">
            <h3 className="text-1.5 font-bold mb-4">Resources</h3>
            <ul className="flex flex-col p-0 gap-3">
              <li className="mg-0 p-0">
                <Link
                  onClick={() =>
                    setNavigationSelected(loggedIn ? "quickie" : "login")
                  }
                  href={loggedIn ? "/quickie" : "/login"}
                  className="font-1.125 font-medium"
                >
                  Quickie
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={() =>
                    setNavigationSelected(loggedIn ? "artist target" : "login")
                  }
                  href={loggedIn ? "/artist-target" : "/login"}
                  className="font-1.125 font-medium"
                >
                  Artist Target
                </Link>
              </li> */}
              <li>
                <Link
                  onClick={() =>
                    setNavigationSelected(loggedIn ? "target" : "login")
                  }
                  href={loggedIn ? "/target-setup" : "/login"}
                  className="font-1.125 font-medium"
                >
                  Target
                </Link>
              </li>
              <li>
                {loggedIn ? (
                  <p className="cursor-pointer font-medium" onClick={logout}>
                    Logout
                  </p>
                ) : (
                  <Link
                    onClick={() => setNavigationSelected("login")}
                    href={"/login"}
                    className=" font-medium"
                  >
                    {loggedIn ? "Logout" : "Login"}
                  </Link>
                )}
              </li>
              <li>
                <Link href={"/contact"} className="font-1.125 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Column 3 */}
        <div className={`mt-6 ${columnStyle} gap-8 flex-1`}>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-1.5 font-bold mb-2">Join us</h3>
            <h4 className="text-1 font-medium mb-2">
              Enter your email to get free stuff
            </h4>
            {/* Form to capture emails */}
            <form
              action="https://meloroids.us21.list-manage.com/subscribe/post"
              method="POST"
              onSubmit={handleFormSubmit}
              id="newsletterForm"
              className="border-solid border-b-2 border-white py-1 gap-2 flex"
            >
              {/* Hidden Inputs */}
              <input
                type="hidden"
                name="u"
                value="74ca7fc92cb84f6ac5e3867ab"
                minLength={5}
                maxLength={30}
              />
              <input
                type="hidden"
                name="id"
                value="7005dd4ba1"
                minLength={5}
                maxLength={30}
              />
              {/* Email Input */}
              <label htmlFor="MERGE0" hidden className="w-40">
                Email Address <span className="req asterisk">*</span>
              </label>
              <input
                className="bg-transparent text-light text-1 font-400 focus:outline-none placeholder-light"
                placeholder="Your Email"
                type="email"
                name="MERGE0"
                id="MERGE0"
                required
                onChange={(e) => setEmail(e.target.value)}
                minLength={5}
                maxLength={30}
              />
              <button
                type={emailValidated ? "submit" : ""}
                className="font-bold"
              >
                SUBMIT
              </button>{" "}
            </form>{" "}
            {emailErrorMessage ? emailErrorMessage : ""}
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-1.5 font-bold mb-4">Follow us</h3>
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <Link
                target="__blank"
                href={"https://www.instagram.com/mongamonga_/"}
              >
                <Icon className="text-1.5" icon="bi:instagram" />
              </Link>
              <Link
                target="__blank"
                href={"https://www.tiktok.com/@mongamonga_"}
              >
                <Icon className="text-1.5" icon="bi:tiktok" />
              </Link>
              <Link
                target="__blank"
                href={"https://www.youtube.com/mongamonga"}
              >
                <Icon className="text-1.5" icon="bi:youtube" />
              </Link>
            </div>
          </div>
          <PrivacyPolicy displayClass={"flex lg:hidden"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

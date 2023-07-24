import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "@/pages/_app";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero-img.png";
import quickieImage from "../../../public/assets/images/quickie.png";
import targetImage from "../../../public/assets/images/target.png";
import { ME } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import Loading from "../Loading/LoadingWhiteText";
import Error from "../Error/Error";
const AuthHome = () => {
  const [username, setUsername] = useState();
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const { loading, data, error } = useQuery(ME);
  useEffect(() => {
    if (loggedIn) {
      if (data) {
        const username = data.me.username;
        setUsername(username);
      }
    }
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="relative flex py-12 px-6 flex-col items-center h-full lg:h-screen lg:h-500">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="A guitar and keyboard floating in space"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 hero__img"
      />{" "}
      <div className="relative flex justify-center  w-full xl:w-64 mb-4">
        <div className=" flex  flex-col gap-2 xl:absolute xl:top-4 xl:left-4 text-white">
          <h3 className="text-1.5 font-medium">Hi, {username}!</h3>
        </div>
      </div>
      <div className="z-2 relative w-full max-w-70 mb-4 flex justify-center">
        <h2 className="text-white text-3 ">Dashboard</h2>
      </div>
      <div className="relative flex flex-col lg:flex-row gap-4 items-center">
        {/* Quickie */}
        <Link
          href={"/quickie"}
          className="hover:opacity-80 duration-200	md:w-1/2 xl:w-full"
        >
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl   px-4 py-4 md:p-10 ">
            <h4 className="text-2.5 font-semibold text-primary mb-2">
              Quickie
            </h4>

            <div className="w-full h-full">
              <Image
                src={quickieImage}
                alt="A snapshot of Quickie by Meloroids"
                className="rounded-2xl features__img"
              />
            </div>
          </div>
        </Link>
        {/* Target */}
        <Link
          href={"/target-setup"}
          className="hover:opacity-80 duration-200	md:w-1/2 xl:w-full"
        >
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl   px-4 py-4 md:p-10 ">
            <h4 className="text-2.5 font-semibold text-primary mb-2">Target</h4>

            <div className="w-full h-full">
              <Image
                src={targetImage}
                alt="A snapshot of Target by Meloroids"
                className="rounded-2xl features__img"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AuthHome;

import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "@/pages/_app";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero-img.png";
import quickieImage from "../../../public/assets/images/quickie.png";
import artistTargetImage from "../../../public/assets/images/artist-target.png";
import targetImage from "../../../public/assets/images/target.png";
import dataImage from "../../../public/assets/images/data.png";
import { ME } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import Loading from "../Loading/LoadingFullScreen";
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
    <div className="relative flex py-12 px-6 flex-col items-center h-full lg:min-h-screen lg:h-500">
      {/* Background Image */}
      <Image
        priority
        src={heroImage}
        alt="A guitar and keyboard floating in space"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 hero__img"
      />{" "}
      <div className="relative flex justify-center  w-full xl:w-64 mb-4">
        <div className="z-20 flex  flex-col items-center xl:items-start gap-2 xl:absolute xl:top-2 xl:left-4 text-white">
          <h3 className="text-1.5 font-medium">Hi, {username}!</h3>
          <Link className="mb-" href={`/edit-profile`}>
            Edit profile
          </Link>
        </div>
      </div>
      <div className="z-2 relative w-full max-w-70 mb-4 lg:mb-6 flex justify-center">
        <h2 className="text-white text-3 ">Dashboard</h2>
      </div>
      <div className="relative flex flex-col justify-center lg:flex-row gap-4 items-center flex-wrap w-full max-w-70">
        {/* Data */}
        <Link
          href={"/data"}
          className="hover:opacity-80 duration-200	md:w-1/2 lg:max-w-30"
        >
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl   px-4 py-4 md:p-10 ">
            <h4 className="text-2.5 font-semibold text-primary mb-2">Data</h4>
            <div className="w-full h-full">
              <Image
                src={dataImage}
                alt="A snapshot of Data by Meloroids"
                className="rounded-2xl features__img"
              />
            </div>
          </div>
        </Link>
        {/* Artist Target */}
        <Link
          href={"/artist-target"}
          className="hover:opacity-80 duration-200	md:w-1/2 lg:max-w-30"
        >
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl   px-4 py-4 md:p-10 ">
            <h4 className="text-2.5 font-semibold text-primary mb-2">
              Artist Target
            </h4>
            <div className="w-full h-full">
              <Image
                src={artistTargetImage}
                alt="A snapshot of Artist Target by Meloroids"
                className="rounded-2xl features__img"
              />
            </div>
          </div>
        </Link>
        {/* Target */}
        <Link
          href={"/target-setup"}
          className="hover:opacity-80 duration-200	md:w-1/2 lg:max-w-30"
        >
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl   px-4 py-4 md:p-10 ">
            <h4 className="text-2.5 font-semibold text-primary mb-2">Target</h4>
            <div className="w-full h-full">
              <Image
                priority={false}
                src={targetImage}
                alt="A snapshot of Target by Meloroids"
                className="rounded-2xl features__img"
              />
            </div>
          </div>
        </Link>
        {/* Quickie */}
        <Link
          href={"/quickie"}
          className="hover:opacity-80 duration-200	md:w-1/2 lg:max-w-30"
        >
          <div className="flex flex-col items-center bg-white shadow-3xl rounded-4xl   px-4 py-4 md:p-10 ">
            <h4 className="text-2.5 font-semibold text-primary mb-2">
              Quickie
            </h4>
            <div className="w-full h-full">
              <Image
                priority={false}
                src={quickieImage}
                alt="A snapshot of Quickie by Meloroids"
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

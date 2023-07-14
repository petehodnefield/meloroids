import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero-img.png";
import quickieImage from "../../../public/assets/images/quickie.png";
import { ME } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
const AuthHome = () => {
  const { loading, data, error } = useQuery(ME);
  if (loading) return <div>Loading...</div>;
  console.log("data", data);

  return (
    <div className="relative flex py-12 px-6 flex-col items-center h-screen lg:h-500">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="A guitar and keyboard floating in space"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 hero__img"
      />{" "}
      <div className="z-2 relative w-full max-w-70 mb-4 flex justify-center">
        <h2 className="text-white text-3 ">Dashboard</h2>
      </div>
      {/* Two card container */}
      <div className="relative flex flex-col items-center">
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

        {/* Profile */}
        <div className="relative flex flex-col items-center text-dark p-12 bg-white rounded-xl">
          <h3 className="text-2 font-semibold">{data.me.username}</h3>
          <div className="flex w-full justify-start gap-4 flex-wrap	">
            <p className="font-bold flex-2">Email:</p>
            <p className="text-primary flex-1">{data.me.email}</p>
          </div>
          <div className="flex w-full justify-start gap-4">
            <p className="font-bold flex-1">Email:</p>
            <p className="flex-2">{data.me.instagramHandle}</p>
          </div>
          <div className="flex w-full justify-start gap-4">
            <p className="font-bold flex-1">Instagram:</p>
            <p className="flex-2">{data.me.instagramHandle}</p>
          </div>
          <div className="flex w-full justify-start gap-4">
            <p className="font-bold flex-1 ">Bio:</p>
            <p className="flex-2">{data.me.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;

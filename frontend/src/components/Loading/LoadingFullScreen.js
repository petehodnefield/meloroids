import React, { useState, useEffect } from "react";
import meloroidsLogo from "../../../public/assets/logo/logo-full-white.png";
import Image from "next/image";
const LoadingFullScreen = () => {
  const [loadingMessage, setLoadingMessage] = useState("loading");
  useEffect(() => {
    const messages = ["loading", "loading.", "loading..", "loading..."];
    let index = 1;
    setInterval(() => {
      setLoadingMessage(messages[index]);
      index = index + 1;
      if (index === 4) {
        index = 0;
      }
    }, "500");
  }, []);
  return (
    <div className="absolute h-screen w-screen z-50 top-0 bg-primary flex flex-col justify-center items-center w-full">
      <div className="h-12 w-48">
        <Image
          priority={true}
          alt="logo for meloroids"
          className="h-full object-cover"
          src={meloroidsLogo}
        />
      </div>
      <p className="text-1.5 text-white">{loadingMessage}</p>
    </div>
  );
};

export default LoadingFullScreen;

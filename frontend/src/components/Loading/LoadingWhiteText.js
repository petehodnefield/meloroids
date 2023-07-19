import React, { useState, useEffect } from "react";
import meloroidsLogo from "../../../public/assets/logo/logo-full-white.png";
import Image from "next/image";
const LoadingWhiteText = () => {
  const [loadingMessage, setLoadingMessage] = useState("Loading");
  useEffect(() => {
    setTimeout(() => {
      setLoadingMessage(loadingMessage.concat("."));
    }, "100");
  }, []);
  return (
    <div className=" flex justify-center">
      <p className="text-2 text-white">{loadingMessage}</p>
    </div>
  );
};

export default LoadingWhiteText;

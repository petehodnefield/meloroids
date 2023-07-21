import React, { useEffect, useState } from "react";
import Home from "../../index";
const ThankYou = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("  https://meloroids.io");
    }, 3000);
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-30  flex flex-col px-8 py-12">
        <div className="bg-light rounded-4xl pt-10 px-10 pb-8 text-center flex items-center flex-col">
          <h2 className="text-2 mb-4">Submission successful!</h2>
          <h3 className="text-1.125 mb-6">
            Thank you for contacting Meloroids. We have received your message
            and will be in contact shortly.
          </h3>
          <p className="text-primary font-semibold text-0.875">
            Redirecting you to home...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

import React, { useEffect } from "react";

const NewsletterConfirmation = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("https://meloroids.io");
    }, 4000);
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-30  flex flex-col px-8 py-12">
        <div className="bg-light rounded-4xl pt-10 px-10 pb-8 text-center flex items-center flex-col">
          <h2 className="text-2 mb-4">Subscription successful!</h2>
          <h3 className="text-1.125 mb-6">
            Thank you for joining our newsletter! We can't wait to send you free
            goodies
          </h3>
          <p className="text-primary font-semibold text-0.875">
            Redirecting you to home...
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterConfirmation;

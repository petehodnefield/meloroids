import React, { useState } from "react";
import Link from "next/link";
const Contact = () => {
  const formInputLabelWrapper = "flex flex-col mb-4";
  const formInput =
    "h-12 w-full rounded-lg pl-4 border-1 border-medium text-1 font-bold focus:outline-primary";
  const formTextArea =
    "h-36 w-full rounded p-4 border-1 border-medium text-1 font-regular focus:outline-primary";
  const formLabel = "font-bold text-0.875 mb-1";

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:max-w-30  flex flex-col px-8 py-12">
        <div className="flex gap-1 text-1 font-medium mb-4">
          <Link href={"/"}>Meloroids</Link>
          <Link href={"/contact"} className="text-medium">
            / Contact
          </Link>
        </div>
        {!formSubmitted ? (
          <div>
            <h2 className="text-2 mb-5">Get in touch</h2>
            <form
              id="contactForm"
              onSubmit={handleFormSubmit}
              className=""
              action=""
            >
              <div className={formInputLabelWrapper}>
                <label htmlFor="email" className={formLabel}>
                  Your email*
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  required
                  className={formInput}
                />
              </div>
              <div className={formInputLabelWrapper}>
                <label htmlFor="subject" className={formLabel}>
                  Subject*
                </label>
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  required
                  className={formInput}
                />
              </div>
              <div className={`${formInputLabelWrapper} mb-8`}>
                <label htmlFor="message" className={formLabel}>
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  required
                  className={formTextArea}
                />
              </div>
              <button
                type="submit"
                className="bg-primary rounded-lg text-white h-12 w-48"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-light rounded-4xl pt-10 px-10 pb-8 text-center flex items-center flex-col">
            <h2 className="text-2 mb-4">Submission successful!</h2>
            <h3 className="text-1.125 mb-6">
              Thank you for contacting Meloroids. We have received your message
              and will be in contact shortly.
            </h3>
            <p className="text-primary font-semibold text-0.875">
              Redirecting you to home in 3, 2, 1
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

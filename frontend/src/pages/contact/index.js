import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CONTACT_SUBMISSION } from "../../../utils/mutations";
import Link from "next/link";
const Contact = () => {
  const formInputLabelWrapper = "flex flex-col mb-4";
  const formInput =
    "h-12 w-full rounded-lg pl-4 border-1 border-medium text-1 font-bold focus:outline-primary";
  const formTextArea =
    "h-36 w-full rounded p-4 border-1 border-medium text-1 font-regular focus:outline-primary";
  const formLabel = "font-bold text-0.875 mb-1";

  const [contactDetails, setContactDetails] = useState({
    user_email: "",
    subject: "",
    message: "",
  });

  const [contactSubmission] = useMutation(CONTACT_SUBMISSION);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactSubmission({
        variables: {
          userEmail: contactDetails.user_email,
          subject: contactDetails.subject,
          message: contactDetails.message,
        },
      });
      const displayConfirmation = window.location.replace(`/contact/thank-you`);
      displayConfirmation();
    } catch (error) {
      console.log(error);
    }
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
        <div>
          <h2 className="text-2 mb-5">Get in touch</h2>
          <form id="contactForm" className="" onSubmit={handleFormSubmit}>
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
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    user_email: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    subject: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    message: e.target.value,
                  })
                }
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
      </div>
    </div>
  );
};

export default Contact;

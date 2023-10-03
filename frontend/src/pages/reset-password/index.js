import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { USER_EMAIL } from "../../../utils/queries";
import {
  btn,
  errorText,
  formInput,
  formInputLabelWrapper,
  formLabel,
} from "../../../utils/styles";
import { GENERATE_RESET_TOKEN } from "../../../utils/mutations";
import { LoginContext } from "../_app";
const ResetPassword = () => {
  const [loggedIn] = useContext(LoginContext);
  // See if user email exists
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { data } = useQuery(USER_EMAIL, {
    variables: {
      email: email,
    },
  });
  const [generateResetToken] = useMutation(GENERATE_RESET_TOKEN);
  //   console.log(`data ${JSON.stringify(data)}`);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!data || !data.userEmail) {
      setErrorMessage(
        "There is not a user associated with this email address."
      );
      return;
    } else {
      try {
        const { data } = await generateResetToken({
          variables: { email: email },
        });
        const { token, user } = await data.generateResetToken;
        setFormSubmitted(true);
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  if (loggedIn) {
    const goHome = window.location.replace("/");
  }
  return (
    <div className={`flex justify-center w-full px-6 py-12`}>
      {!formSubmitted ? (
        <div className="flex w-full md:max-w-30 md:px-8 justify-center py-12 bg-white shadow-3xl rounded-xl">
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            id="resetEmail"
            className="flex flex-col items-center w-full px-8"
          >
            <h1 className="text-2 mb-6">Reset Password</h1>
            <div className={`${formInputLabelWrapper}`}>
              <label className={`${formLabel}`} htmlFor="email">
                Enter your email
              </label>
              <input
                className={`${formInput}`}
                type="email"
                name="email"
                id="email"
                minLength={1}
                maxLength={30}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {errorMessage ? (
                <p className={`${errorText}`}>{errorMessage}</p>
              ) : (
                ""
              )}
            </div>
            <button className={`${btn} bg-primary text-white mt-2`}>
              Send link
            </button>
          </form>
        </div>
      ) : (
        <div className="flex w-full flex-col md:max-w-30 md:px-8 justify-center items-center py-12 bg-white shadow-3xl rounded-xl">
          <h2 className="text-2 mb-6">Check your email</h2>
          <p>
            We have sent a link to the email provided that will expire in 15
            minutes. Please check your email inbox and reset your password.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;

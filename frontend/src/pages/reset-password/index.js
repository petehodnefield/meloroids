import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { USER_EMAIL } from "../../../utils/queries";
import {
  btn,
  formInput,
  formInputLabelWrapper,
  formLabel,
} from "../../../utils/styles";
import { GENERATE_RESET_TOKEN } from "../../../utils/mutations";

const ResetPassword = () => {
  // See if user email exists
  const [email, setEmail] = useState("");

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
      console.log("User does not exist!");
      return;
    } else {
      try {
        const { data } = await generateResetToken({
          variables: { email: email },
        });
        const { token, user } = await data.generateResetToken;
        // console.log("token", token);
        // console.log("user", user);
        // window.location.replace(`/reset-password/${user._id}/${token}`);
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <div className={`flex justify-center w-full`}>
      <div className="flex max-w-70 w-full justify-center">
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          id="resetEmail"
          className="flex flex-col items-center"
        >
          <h1 className="text-2 mb-4">Reset Password</h1>
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
          </div>
          <button className={`${btn} bg-primary text-white`}>Send link</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

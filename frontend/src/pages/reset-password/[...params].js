import React, { useState, useEffect } from "react";
import { initializeApollo } from "../../../lib/apollo";
import { useQuery, useMutation } from "@apollo/client";
import { CHANGE_USER_PASSWORD } from "../../../utils/mutations";
import { USER, VERIFY_TOKEN } from "../../../utils/queries";
import Auth from "../../../utils/auth";
import {
  successText,
  formLabel,
  formInput,
  inputStyle,
  formInputLabelWrapper,
  failureInputStyle,
  successInputStyle,
  btn,
  errorText,
} from "../../../utils/styles";

const ResetPasswordParams = ({ queryID }) => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  console.log(passwords);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const userID = queryID.params[0];
  const token = queryID.params[1];

  const { data, loading } = useQuery(VERIFY_TOKEN, {
    variables: {
      token: token,
      userId: userID,
    },
  });

  const [changeUserPassword] = useMutation(CHANGE_USER_PASSWORD);

  // Validate password
  useEffect(() => {
    const passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwords.newPassword.match(passwordFormat)) {
      setPasswordValidated(true);
    } else {
      setPasswordValidated(false);
    }
  }, [passwords.newPassword]);

  // Compare password and passwordConfirm
  useEffect(() => {
    if (
      passwords.newPassword === passwords.confirmNewPassword &&
      passwords.newPassword.length > 1
    ) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [passwords.newPassword, passwords.confirmNewPassword]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch || !passwordValidated) {
      return;
    } else {
      try {
        await changeUserPassword({
          variables: {
            currentPassword: passwords.currentPassword,
            newPassword: passwords.newPassword,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!loading && !data) return <div>This token has expired!</div>;

  return (
    <div className="relative w-full  flex justify-center items-center  my-8  pt-12 pb-8 md:py-12 rounded">
      <div className="w-full max-w-24   bg-white shadow-3xl rounded py-12 px-8">
        <h1 className="text-1.5 font-semibold mb-6">Reset Password</h1>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex flex-col items-center"
        >
          <div className={`${formInputLabelWrapper}`}>
            <label htmlFor="newPassword" className={`${formLabel}`}>
              New password:
            </label>
            <input
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              minLength={8}
              maxLength={20}
              required
              type="password"
              name="newPassword"
              id="newPassword"
              className={`${inputStyle}  ${
                passwordValidated ? successInputStyle : ""
              }     
                ${
                  !passwordValidated && passwords.newPassword.length >= 1
                    ? failureInputStyle
                    : ""
                }  `}
            />
            {!passwordValidated && passwords.newPassword.length >= 1 ? (
              <p className={errorText}>
                Please enter a password that meets the criteria
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={`${formInputLabelWrapper} mb-10`}>
            <label htmlFor="confirmNewPassword" className={`${formLabel}`}>
              Confirm new password:
            </label>
            <input
              onChange={(e) =>
                setPasswords({
                  ...passwords,
                  confirmNewPassword: e.target.value,
                })
              }
              minLength={8}
              maxLength={20}
              required
              type="password"
              name="confirmNewPassword"
              id="confirmNewPassword"
              className={`${inputStyle}    ${
                passwordMatch && passwordValidated ? successInputStyle : ""
              }
                ${
                  (!passwordMatch &&
                    passwords.confirmNewPassword.length >= 1) ||
                  (!passwordValidated &&
                    passwords.confirmNewPassword.length >= 1)
                    ? failureInputStyle
                    : ""
                }`}
            />
            {!passwordMatch && passwords.confirmNewPassword.length >= 1 ? (
              <p className={errorText}>Passwords do not match</p>
            ) : (
              ""
            )}
            {successMessage ? (
              <p className={`${successText}`}>{successMessage}</p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className={`${btn} mt-4 bg-dark text-white `}>
            Save
          </button>
        </form>{" "}
        <div className="flex flex-col mt-8 items-start">
          <div className=" flex flex-col  items-start mb-1 py-2">
            <h3 className="font-semibold mb-2">Password requirements:</h3>
            <ul className="list-disc	text-1 pl-5 mb-2 font-medium">
              <li>8-20 characters</li>
              <li>Include all of the following:</li>
              <ul className="sublist	pl-4">
                <li>1 uppercase letter</li>
                <li>1 lowercase letter</li>
                <li>1 number</li>
                <li>1 special character</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordParams;

export const getServerSideProps = async ({ query }) => {
  const queryID = query;

  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: USER,
    variables: { userId: queryID.params[0] },
  });

  return {
    props: {
      data,
      initializeApolloState: apolloClient.cache.extract(),
      queryID,
    },
  };
};

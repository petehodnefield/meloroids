import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SIGNUP } from "utils/mutations";
import { USERNAME, USER_EMAIL } from "utils/queries";
import Auth from "utils/auth";
import { Icon } from "@iconify/react";
import LoadingWhiteText from "../Loading/LoadingWhiteText";
import Error from "../Error/Error";
const SignupForm = () => {
  const inputStyle =
    "text-1  font-semibold  border-2 w-full h-12 rounded-lg pl-4  focus:duration-400";
  const labelStyle = "text-0.875 font-semibold mb-0.5";
  const formInputWrapperStyle = "flex flex-col w-full";
  const errorMessage = `text-0.875 font-semibold text-red mt-2`;
  const formInputError = `bg-formError border-red focus:outline-red`;
  const successInputStyle = `border-confirm bg-confirmLight focus:outline-confirm`;
  const failureInputStyle = `border-deny bg-denyLight focus:outline-deny`;
  const checkMarkStyle = "text-2 text-confirm absolute right-2.5 top-2.5";
  const xMarkStyle = "text-2 text-red absolute right-2.5 top-2.5";

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    emailConfirm: "",
    instagramHandle: "",
  });
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [emailValidated, setEmailValidated] = useState(false);
  // State to hold confirm emails
  const [emailMatch, setEmailMatch] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const [passwordValidated, setPasswordValidated] = useState(false);

  const [signUp, { loading, data, error }] = useMutation(SIGNUP);
  const {
    loading: usernameLoading,
    data: usernameData,
    error: usernameError,
  } = useQuery(USERNAME, {
    variables: { username: userInfo.username },
  });

  const {
    loading: emailLoading,
    data: emailData,
    error: emailError,
  } = useQuery(USER_EMAIL, {
    variables: { email: userInfo.email },
  });

  // Check if username exists in db
  useEffect(() => {
    if (!usernameData || !usernameData.username) {
      setUsernameAvailable(true);
    } else {
      setUsernameAvailable(false);
    }
  }, [usernameData]);

  // Check if email is available and if it matches regex
  useEffect(() => {
    if (!emailData || !emailData.userEmail) {
      setEmailAvailable(true);
      const emailFormat =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (userInfo.email.match(emailFormat)) {
        setEmailValidated(true);
      } else {
        setEmailValidated(false);
      }
    } else {
      setEmailAvailable(false);
    }
  }, [emailData]);

  // Compare email and emailConfirm
  useEffect(() => {
    if (userInfo.email === userInfo.emailConfirm && userInfo.email.length > 1) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  }, [userInfo.email, userInfo.emailConfirm]);

  // Validate password
  useEffect(() => {
    const passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (userInfo.password.match(passwordFormat)) {
      setPasswordValidated(true);
    } else {
      setPasswordValidated(false);
    }
  }, [userInfo.password]);

  // Compare password and passwordConfirm
  useEffect(() => {
    if (
      userInfo.password === userInfo.passwordConfirm &&
      userInfo.password.length > 1
    ) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [userInfo.password, userInfo.passwordConfirm]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signUp({
        variables: {
          username: userInfo.username,
          password: userInfo.password,
          email: userInfo.email,
          instagramHandle: userInfo.instagramHandle,
        },
      });
      Auth.login(data.createUser.token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      id="signupForm"
      // action="https://meloroids.us12.list-manage.com/subscribe/post"
      method="POST"
      onSubmit={handleFormSubmit}
    >
      {/* Username Input Field */}
      <div className={`${formInputWrapperStyle} mb-8`}>
        <label htmlFor="MERGE1" className={`${labelStyle}`}>
          Username*
        </label>
        <div className="relative">
          <input
            minLength={3}
            maxLength={20}
            name="MERGE1"
            id="MERGE1"
            type="text"
            required
            className={`${inputStyle} 
            ${
              usernameAvailable && userInfo.username.length >= 2
                ? successInputStyle
                : ""
            }
            ${!usernameAvailable ? failureInputStyle : ""}
            `}
            onChange={(e) => {
              setUserInfo({ ...userInfo, username: e.target.value });
            }}
          />
        </div>

        {!usernameAvailable ? (
          <p className={errorMessage}>Username taken!</p>
        ) : (
          ""
        )}
      </div>

      {/* Email Address Input Field */}
      <div className={`${formInputWrapperStyle} mb-4`}>
        <label htmlFor="MERGE0" className={`${labelStyle}`}>
          Email Address*
        </label>
        <div className="relative">
          <input
            minLength={6}
            maxLength={30}
            name="MERGE0"
            id="MERGE0"
            type="email"
            required
            className={`${inputStyle} 
            ${emailAvailable && emailValidated ? successInputStyle : ""}
            ${
              (userInfo.email.length >= 1 && !emailAvailable) ||
              (userInfo.email.length >= 1 && !emailValidated)
                ? failureInputStyle
                : ""
            }
            `}
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
          />
        </div>
        {!emailAvailable ? (
          <p className={errorMessage}>Email already taken!</p>
        ) : (
          ""
        )}
        {!emailValidated && userInfo.email.length >= 2 ? (
          <p className={errorMessage}>Please enter a valid email!</p>
        ) : (
          ""
        )}
      </div>

      {/* Confirm Email Address Input */}
      <div className={`${formInputWrapperStyle} mb-8`}>
        <label htmlFor="confirmEmail" className={`${labelStyle}`}>
          Confirm Email Address*
        </label>
        <div className="relative">
          <input
            minLength={6}
            maxLength={30}
            id="confirmEmail"
            type="email"
            required
            className={`${inputStyle}
            ${emailMatch ? successInputStyle : ""}
            ${
              !emailMatch && userInfo.emailConfirm.length >= 1
                ? failureInputStyle
                : ""
            }
            `}
            onChange={(e) => {
              setUserInfo({ ...userInfo, emailConfirm: e.target.value });
            }}
          />
        </div>
        {!emailMatch && userInfo.emailConfirm.length >= 1 ? (
          <p className={errorMessage}>Emails do not match</p>
        ) : (
          ""
        )}
      </div>

      {/* Password Input Field */}
      <div
        className={`${formInputWrapperStyle} ${
          passwordValidated ? "mb-4" : "mb-2"
        }`}
      >
        <label htmlFor="password" className={`${labelStyle}`}>
          Password*
        </label>
        <div className="relative">
          <input
            minLength={8}
            maxLength={20}
            id="password"
            type="password"
            required
            className={`${inputStyle} 
             ${passwordValidated ? successInputStyle : ""}     
             ${
               !passwordValidated && userInfo.password.length >= 1
                 ? failureInputStyle
                 : ""
             }         
            `}
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
          />
        </div>
        {!passwordValidated ? (
          <div className=" flex flex-col  items-start mb-1 py-2">
            <p className="text-1 text-primary font-medium ">Password must:</p>
            <ul className="list-disc	text-1 pl-5 mb-2 font-medium">
              <li>Be between 8 and 20 characters</li>
              <li>Include all of the following:</li>
              <ul className="sublist	pl-4">
                <li>1 uppercase letter</li>
                <li>1 lowercase letter</li>
                <li>1 number letter</li>
                <li>1 special character</li>
              </ul>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Confirm Password Input Field */}
      <div className={`${formInputWrapperStyle} mb-8`}>
        <label htmlFor="confirmPassword" className={`${labelStyle}`}>
          Confirm Password*
        </label>
        <div className="relative">
          <input
            minLength={8}
            maxLength={20}
            id="confirmPassword"
            type="password"
            required
            className={`${inputStyle} 
            ${passwordMatch && passwordValidated ? successInputStyle : ""}
            ${
              (!passwordMatch && userInfo.passwordConfirm.length >= 1) ||
              (!passwordValidated && userInfo.passwordConfirm.length >= 1)
                ? failureInputStyle
                : ""
            }
            `}
            onChange={(e) => {
              setUserInfo({ ...userInfo, passwordConfirm: e.target.value });
            }}
          />
        </div>
        {!passwordMatch && userInfo.passwordConfirm.length >= 1 ? (
          <p className={errorMessage}>Passwords do not match</p>
        ) : (
          ""
        )}
        {!passwordValidated && userInfo.passwordConfirm.length >= 1 ? (
          <p className={errorMessage}>
            Please enter a password that meets the criteria
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={`${formInputWrapperStyle} mb-8`}>
        <label htmlFor="instagram" className={`${labelStyle}`}>
          Instagram Handle
        </label>
        <input
          minLength={2}
          maxLength={20}
          id="instagram"
          type="text"
          className={`${inputStyle}
          ${userInfo.instagramHandle.length >= 1 ? successInputStyle : ""}`}
          onChange={(e) =>
            setUserInfo({ ...userInfo, instagramHandle: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className=" mb-6 bg-dark text-white  text-1 font-semibold h-12 w-full md:w-48 rounded  hover:opacity-80 duration-200"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;

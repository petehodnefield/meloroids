import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  formInputLabelWrapper,
  formInput,
  formLabel,
  btn,
  errorText,
  successInputStyle,
  failureInputStyle,
  inputStyle,
} from "../../../utils/styles";
import { useQuery, useMutation } from "@apollo/client";
import { USER_EMAIL } from "../../../utils/queries";
import { CHANGE_USER_INFO } from "../../../utils/mutations";
const ChangeEmailModal = ({
  setChangeEmailModalOpen,
  currentEmail,
  refetch,
}) => {
  const [emails, setEmails] = useState({
    newEmail: "",
    confirmNewEmail: "",
  });

  const [emailAvailable, setEmailAvailable] = useState(true);
  const [emailValidated, setEmailValidated] = useState(false);
  const [emailMatch, setEmailMatch] = useState(false);

  const { data } = useQuery(USER_EMAIL, {
    variables: { email: emails.newEmail },
  });
  const [changeUserInfo] = useMutation(CHANGE_USER_INFO);

  console.log(`data ${JSON.stringify(data)}`);
  useEffect(() => {
    if (!data || !data.userEmail) {
      setEmailAvailable(true);
      const emailFormat =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emails.newEmail.match(emailFormat)) {
        setEmailValidated(true);
      } else {
        setEmailValidated(false);
      }
    } else {
      setEmailAvailable(false);
      const emailFormat =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emails.newEmail.match(emailFormat)) {
        setEmailValidated(true);
      } else {
        setEmailValidated(false);
      }
    }
  }, [data]);

  useEffect(() => {
    if (
      emails.newEmail === emails.confirmNewEmail &&
      emails.newEmail.length > 1
    ) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  }, [emails.newEmail, emails.confirmNewEmail]);

  //   console.log(`passwords ${JSON.stringify(passwords)}`);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!emailAvailable || !emailValidated || !emailMatch) return;
    else {
      try {
        await changeUserInfo({ variables: { email: emails.newEmail } });
        await refetch();
        await setChangeEmailModalOpen(false);
      } catch (e) {
        console.log(e);
      }
    }
    // setChangeEmailModalOpen(false);
  };
  return (
    <div className="absolute top-0 h-screen w-full bg-darkScreen flex items-start py-12 justify-center">
      <div className="relative border-dark border-1 bg-white shadow-3xl flex flex-col items-center p-12 rounded">
        <Icon
          className="absolute top-4 right-4 text-1.5 cursor-pointer"
          icon="octicon:x-12"
          onClick={() => setChangeEmailModalOpen(false)}
        />

        <h2 className="text-1.5 font-semibold mb-6">Change email</h2>
        <form
          id="changeEmailForm"
          className="flex flex-col items-center"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className={`${formInputLabelWrapper} mb-8`}>
            <p className={`${formLabel}`}>Current email:</p>
            <div
              className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
            >
              {currentEmail}
            </div>
          </div>
          <div className={`${formInputLabelWrapper} `}>
            <label htmlFor="newEmail" className={`${formLabel}`}>
              New email:
            </label>
            <input
              onChange={(e) =>
                setEmails({
                  ...emails,
                  newEmail: e.target.value.toLowerCase(),
                })
              }
              type="email"
              name="newEmail"
              id="newEmail"
              required
              minLength={1}
              maxLength={30}
              className={`${inputStyle}  
              ${
                emailAvailable && emails.newEmail.length >= 2 && emailValidated
                  ? successInputStyle
                  : ""
              }
              ${
                !emailAvailable ||
                (!emailValidated && emails.newEmail.length >= 2)
                  ? failureInputStyle
                  : ""
              }`}
            />
            {!emailValidated && emails.newEmail.length >= 2 ? (
              <p className={`${errorText}`}>
                Please enter a valid email address!
              </p>
            ) : (
              ""
            )}
            {!emailAvailable ? (
              currentEmail === emails.newEmail ? (
                <p className={`${errorText}`}>
                  {" "}
                  This is already your email you donut!
                </p>
              ) : (
                <p className={`${errorText}`}>This email is already taken!</p>
              )
            ) : (
              ""
            )}
          </div>
          <div className={`${formInputLabelWrapper} mb-10`}>
            <label htmlFor="confirmNewEmail" className={`${formLabel}`}>
              Confirm new email:
            </label>
            <input
              onChange={(e) =>
                setEmails({
                  ...emails,
                  confirmNewEmail: e.target.value.toLowerCase(),
                })
              }
              required
              minLength={1}
              maxLength={30}
              type="email"
              name="confirmNewEmail"
              id="confirmNewEmail"
              className={`${inputStyle}
              ${emailMatch ? successInputStyle : ""}
              ${
                !emailMatch && emails.confirmNewEmail.length >= 1
                  ? failureInputStyle
                  : ""
              }`}
            />
            {!emailMatch &&
            emails.confirmNewEmail.length > 0 &&
            emails.newEmail.length > 0 ? (
              <p className={`${errorText}`}> The emails do not match!</p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className={`${btn} bg-dark text-white `}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeEmailModal;

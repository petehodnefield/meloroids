import React, { useState, useEffect } from "react";
import {
  formInputLabelWrapper,
  formLabel,
  formInput,
  btn,
  inputStyle,
  successInputStyle,
  failureInputStyle,
  errorMessage,
  errorText,
  successText,
} from "../../../utils/styles";
import { Icon } from "@iconify/react";
import { useMutation } from "@apollo/client";
import { CHANGE_USER_PASSWORD } from "../../../utils/mutations";
const ChangePasswordModal = ({ setChangePasswordModalOpen, refetch }) => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [originalPasswordMatch, setOriginalPasswordMatch] = useState("");
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
        setSuccessMessage("Password successfully reset!");
        setOriginalPasswordMatch("");
        await refetch();
        setTimeout(() => {
          setChangePasswordModalOpen(false);
        }, 1500);
      } catch (e) {
        setOriginalPasswordMatch(e.message);
      }
    }
  };
  return (
    <div className="absolute top-0 h-full w-full bg-darkScreen flex items-start py-12 justify-center">
      <div className="relative border-dark border-1 bg-white shadow-3xl flex gap-12 p-12 rounded">
        <Icon
          className="absolute top-4 right-4 text-1.5 cursor-pointer"
          icon="octicon:x-12"
          onClick={() => setChangePasswordModalOpen(false)}
        />

        <div className="w-80">
          <h2 className="text-1.5 font-semibold mb-6">Change password</h2>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className={`${formInputLabelWrapper}  mb-8`}>
              <label htmlFor="currentPassword" className={`${formLabel}`}>
                Current password:
              </label>
              <input
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    currentPassword: e.target.value,
                  })
                }
                type="password"
                name="currentPassword"
                id="currentPassword"
                minLength={8}
                maxLength={20}
                required
                className={`${inputStyle}`}
              />
              {!originalPasswordMatch ? (
                ""
              ) : (
                <p className={`${errorText}`}>{originalPasswordMatch}</p>
              )}
            </div>
            <div className={`${formInputLabelWrapper}`}>
              <label htmlFor="newPassword" className={`${formLabel}`}>
                New password:
              </label>
              <input
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    newPassword: e.target.value,
                  })
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
          </form>
        </div>
        <div className="flex flex-col">
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

export default ChangePasswordModal;

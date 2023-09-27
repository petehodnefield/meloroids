import React, { useState } from "react";
import {
  formInputLabelWrapper,
  formLabel,
  formInput,
  btn,
} from "../../../utils/styles";
import { Icon } from "@iconify/react";
const ChangePasswordModal = ({ setChangePasswordModalOpen }) => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  //   console.log(`passwords ${JSON.stringify(passwords)}`);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setChangePasswordModalOpen(false);
  };
  return (
    <div className="absolute h-screen w-full bg-darkScreen flex items-start py-12 justify-center">
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
                className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
              />
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
                type="password"
                name="newPassword"
                id="newPassword"
                className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
              />
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
                type="password"
                name="confirmNewPassword"
                id="confirmNewPassword"
                className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
              />
            </div>
            <button type="submit" className={`${btn} bg-dark text-white `}>
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

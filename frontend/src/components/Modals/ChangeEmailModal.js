import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  formInputLabelWrapper,
  formInput,
  formLabel,
  btn,
} from "../../../utils/styles";
const ChangeEmailModal = ({ setChangeEmailModalOpen, currentEmail }) => {
  const [emails, setEmails] = useState({
    newEmail: "",
    confirmNewEmail: "",
  });
  //   console.log(`passwords ${JSON.stringify(passwords)}`);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setChangeEmailModalOpen(false);
  };
  return (
    <div className="absolute h-screen w-full bg-darkScreen flex items-start py-12 justify-center">
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
                  newEmail: e.target.value,
                })
              }
              type="email"
              name="newEmail"
              id="newEmail"
              className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
            />
          </div>
          <div className={`${formInputLabelWrapper} mb-10`}>
            <label htmlFor="confirmNewEmail" className={`${formLabel}`}>
              Confirm new email:
            </label>
            <input
              onChange={(e) =>
                setEmails({
                  ...emails,
                  confirmNewEmail: e.target.value,
                })
              }
              type="email"
              name="confirmNewEmail"
              id="confirmNewEmail"
              className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
            />
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

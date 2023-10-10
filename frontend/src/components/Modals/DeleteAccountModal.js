import { useState } from "react";
import React from "react";
import { Icon } from "@iconify/react";
import {
  formInputLabelWrapper,
  formInput,
  formLabel,
  btn,
} from "../../../utils/styles";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
const DeleteAccountModal = ({ setDeleteAccountModalOpen }) => {
  const [deleteConfirmMessage, setDeleteConfirmMessage] = useState("");

  const [deleteUser] = useMutation(DELETE_USER);

  const handleAccountDeletion = async (e) => {
    e.preventDefault();

    if (deleteConfirmMessage !== "delete my account") {
      return;
    } else {
      try {
        await deleteUser();
        Auth.logout();
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="absolute top-0 h-full w-full bg-darkScreen flex items-start px-6 py-12 justify-center">
      <div className="w-full md:w-96 relative border-dark border-1 bg-white shadow-3xl flex flex-col items-center pt-12 px-8 rounded">
        <Icon
          className="absolute top-4 right-4 text-1.5 cursor-pointer"
          icon="octicon:x-12"
          onClick={() => setDeleteAccountModalOpen(false)}
        />
        <h2 className="text-1.5 font-semibold mb-6">Delete account</h2>
        <p className="font-semibold mb-8 text-center max-w-660">
          Account deletions are final, and your account cannot be recovered once
          deleted. If you’re sure you want to delete your account, please enter
          <span className="font-bold text-primary"> delete my account </span> in
          the box below.
        </p>
        <form
          id="accountDeleteForm"
          className="w-full flex flex-col items-center"
          onSubmit={(e) => handleAccountDeletion(e)}
          action=""
        >
          <div className={`${formInputLabelWrapper} w-full`}>
            <label className={`${formLabel} text-bold`}>
              Confirm account deletion
            </label>
            <input
              required
              minLength={1}
              maxLength={20}
              onChange={(e) =>
                setDeleteConfirmMessage(e.target.value.toLowerCase())
              }
              placeholder="delete my account"
              className={`${formInput}  flex items-start py-4 justify-between bg-white border-1 border-light rounded`}
            />
          </div>
          <button
            type="submit"
            className={`${btn} bg-red text-white mb-12 ${
              deleteConfirmMessage !== "delete my account"
                ? "pointer-events-none opacity-60"
                : ""
            }`}
          >
            Delete account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountModal;

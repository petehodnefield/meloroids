import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../_app";
import Link from "next/link";
import {
  formInput,
  formInputLabelWrapper,
  formLabel,
} from "../../../utils/styles";
import { Icon } from "@iconify/react";
import { useQuery } from "@apollo/client";
import { ME } from "../../../utils/queries";
import Login from "../login";
import ChangePasswordModal from "../../components/Modals/ChangePasswordModal";
import ChangeEmailModal from "../../components/Modals/ChangeEmailModal";
const EditProfile = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  // Data obtained from me query
  const [meDetails, setMeDetails] = useState({});
  // Tracks which fields are being edited
  const [editField, setEditField] = useState({
    username: false,
    instagramHandle: false,
    bio: false,
  });
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [changeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
  const { data: meData } = useQuery(ME);
  // console.log(`meDetails ${JSON.stringify(meDetails)}`);
  useEffect(() => {
    if (!meData || !meData.me) {
      return;
    } else {
      const me = meData.me;
      setMeDetails({
        username: me.username,
        email: me.email,
        instagramHandle: me.instagramHandle,
        bio: me.bio,
      });
    }
  }, [meData]);

  if (!loggedIn) return <Login />;
  return (
    <div className="relative w-full flex justify-center">
      {changePasswordModalOpen ? (
        <ChangePasswordModal
          setChangePasswordModalOpen={setChangePasswordModalOpen}
        />
      ) : (
        ""
      )}
      {changeEmailModalOpen ? (
        <ChangeEmailModal
          currentEmail={meDetails.email}
          setChangeEmailModalOpen={setChangeEmailModalOpen}
        />
      ) : (
        ""
      )}
      <div className="w-full sm:max-w-30  flex flex-col px-8 py-12">
        <div className="flex gap-1 text-1 font-medium mb-4">
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/edit-profile"} className="text-medium">
            / Edit profile
          </Link>
        </div>
        {/* Edit profile card */}
        <div className="flex flex-col bg-white shadow-3xl rounded p-10">
          <h1 className="text-2 mb-8">Edit profile</h1>
          <form>
            {/* Username */}
            <div>
              {editField.username ? (
                <div className={`${formInputLabelWrapper}`}>
                  <div className="flex justify-between w-full">
                    <label htmlFor="username" className={`${formLabel}`}>
                      Username:
                    </label>{" "}
                    <p
                      onClick={() =>
                        setEditField({ ...editField, username: false })
                      }
                      className="text-0.875 font-semibold underline cursor-pointer"
                    >
                      Save
                    </p>
                  </div>
                  <input
                    id="username"
                    name="username"
                    className={`${formInput} bg-white border-1 border-light rounded`}
                    type="text"
                  />
                </div>
              ) : (
                <div className={`${formInputLabelWrapper}`}>
                  <p className={`${formLabel}`}>Username:</p>
                  <div
                    onClick={() =>
                      setEditField({ ...editField, username: true })
                    }
                    className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
                  >
                    {meDetails.username}
                    <Icon
                      icon="mdi:pencil"
                      className="text-1.25 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Email */}
            <div className={`${formInputLabelWrapper}`}>
              <label htmlFor="email" className={`${formLabel}`}>
                Email:
              </label>
              <div
                className={`${formInput} flex items-center bg-white border-1 border-light rounded`}
              >
                {meDetails.email}
              </div>
            </div>
            {/* Instagram handle */}
            <div>
              {editField.instagramHandle ? (
                <div className={`${formInputLabelWrapper}`}>
                  <div className="flex justify-between w-full">
                    <label htmlFor="instagram" className={`${formLabel}`}>
                      Instagram handle:
                    </label>{" "}
                    <p
                      onClick={() =>
                        setEditField({ ...editField, instagramHandle: false })
                      }
                      className="text-0.875 font-semibold underline cursor-pointer"
                    >
                      Save
                    </p>
                  </div>
                  <input
                    id="instagram"
                    name="instagram"
                    className={`${formInput} bg-white border-1 border-light rounded`}
                    type="text"
                  />
                </div>
              ) : (
                <div className={`${formInputLabelWrapper}`}>
                  <p className={`${formLabel}`}>Instagram handle:</p>
                  <div
                    onClick={() =>
                      setEditField({ ...editField, instagramHandle: true })
                    }
                    className={`${formInput} flex items-center justify-between bg-white border-1 border-light rounded`}
                  >
                    {meDetails.instagramHandle}
                    <Icon
                      icon="mdi:pencil"
                      className="text-1.25 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Password */}
            <div className={`${formInputLabelWrapper}`}>
              <label htmlFor="password" className={`${formLabel}`}>
                Password:
              </label>
              <div
                className={`${formInput} flex items-center bg-white border-1 border-light rounded`}
              >
                *******
              </div>
            </div>{" "}
            {/* Bio */}
            <div>
              {editField.bio ? (
                <div className={`${formInputLabelWrapper}`}>
                  <div className="flex justify-between w-full">
                    <label htmlFor="username" className={`${formLabel}`}>
                      Bio:
                    </label>{" "}
                    <p
                      onClick={() => setEditField({ ...editField, bio: false })}
                      className="text-0.875 font-semibold underline cursor-pointer"
                    >
                      Save
                    </p>
                  </div>
                  <textarea
                    id="bio"
                    name="bio"
                    className={`${formInput} py-4 h-24 bg-white border-1 border-light rounded`}
                    type="text"
                  />
                </div>
              ) : (
                <div className={`${formInputLabelWrapper}`}>
                  <p className={`${formLabel}`}>Bio:</p>
                  <div
                    onClick={() => setEditField({ ...editField, bio: true })}
                    className={`${formInput} h-24 flex items-start py-4 justify-between bg-white border-1 border-light rounded`}
                  >
                    {meDetails.bio}
                    <Icon
                      icon="mdi:pencil"
                      className="text-1.25 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </form>
          <div className="flex flex-col gap-1">
            <p
              onClick={() => setChangePasswordModalOpen(true)}
              className="font-semibold text-1.125 underline cursor-pointer"
            >
              Change password
            </p>
            <p
              onClick={() => setChangeEmailModalOpen(true)}
              className="font-semibold text-1.125 underline cursor-pointer"
            >
              Change email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

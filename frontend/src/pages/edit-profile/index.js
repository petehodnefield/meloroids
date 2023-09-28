import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../_app";
import Link from "next/link";
import {
  errorText,
  formInput,
  formInputLabelWrapper,
  formLabel,
} from "../../../utils/styles";
import { Icon } from "@iconify/react";
import { useQuery, useMutation } from "@apollo/client";
import { ME, USERNAME } from "../../../utils/queries";
import { CHANGE_USER_INFO } from "../../../utils/mutations";
import Login from "../login";
import ChangePasswordModal from "../../components/Modals/ChangePasswordModal";
import ChangeEmailModal from "../../components/Modals/ChangeEmailModal";
const EditProfile = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  // Data obtained from me query
  const [meDetails, setMeDetails] = useState({});
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  // Tracks which fields are being edited
  const [editField, setEditField] = useState({
    username: false,
    instagramHandle: false,
    bio: false,
  });
  const [updatedFields, setUpdatedFields] = useState({
    username: "",
    instagramHandle: "",
    bio: "",
  });
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [changeEmailModalOpen, setChangeEmailModalOpen] = useState(false);

  const { data: meData, refetch } = useQuery(ME);
  const { data: usernameData, refetch: usernameRefetch } = useQuery(USERNAME, {
    variables: { username: updatedFields.username },
  });
  const [changeUserInfo] = useMutation(CHANGE_USER_INFO);

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

  // Check if username exists in db
  useEffect(() => {
    if (!usernameData || !usernameData.username) {
      setUsernameAvailable(true);
    } else {
      setUsernameAvailable(false);
    }
  }, [usernameData]);

  const handleUserInfoUpdate = async (e, updatedField) => {
    if (!usernameAvailable) {
      return;
    }
    try {
      await changeUserInfo({
        variables: {
          username: updatedField.username
            ? updatedField.username
            : meDetails.username,
          bio: updatedField.bio ? updatedField.bio : meDetails.bio,
          instagramHandle: updatedField.instagramHandle
            ? updatedField.instagramHandle
            : meDetails.instagramHandle,
        },
      });
      await refetch();
    } catch (e) {
      console.log(e);
    }
  };

  if (!loggedIn) return <Login />;
  else
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
                        onClick={(e) => {
                          setEditField({ ...editField, username: false });
                          handleUserInfoUpdate(e, updatedFields);
                        }}
                        className={`text-0.875 font-semibold underline cursor-pointer ${
                          !usernameAvailable ||
                          updatedFields.username.length <= 0
                            ? "pointer-events-none	opacity-60"
                            : ""
                        }`}
                      >
                        Save
                      </p>
                    </div>
                    <input
                      id="username"
                      name="username"
                      className={`${formInput} bg-white border-1 border-light rounded ${
                        !usernameAvailable ? "border-red focus:outline-red" : ""
                      }`}
                      type="text"
                      minLength={1}
                      maxLength={20}
                      onChange={(e) =>
                        setUpdatedFields({
                          ...updatedFields,
                          username: e.target.value,
                        })
                      }
                    />
                    {!usernameAvailable ? (
                      updatedFields.username === meDetails.username ? (
                        <p className={`${errorText}`}>
                          This is already your username you donut!
                        </p>
                      ) : (
                        <p className={`${errorText}`}>
                          Username already taken!
                        </p>
                      )
                    ) : (
                      ""
                    )}
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
                  {meDetails.email ? meDetails.email : ""}
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
                        onClick={(e) => {
                          setEditField({
                            ...editField,
                            instagramHandle: false,
                          });
                          handleUserInfoUpdate(e, updatedFields);
                        }}
                        className={`text-0.875 font-semibold underline cursor-pointer ${
                          updatedFields.instagramHandle.length <= 0
                            ? "pointer-events-none	opacity-60"
                            : ""
                        }`}
                      >
                        Save
                      </p>
                    </div>
                    <input
                      onChange={(e) =>
                        setUpdatedFields({
                          ...updatedFields,
                          instagramHandle: e.target.value,
                        })
                      }
                      minLength={1}
                      maxLength={20}
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
                      {meDetails.instagramHandle
                        ? meDetails.instagramHandle
                        : ""}
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
                        onClick={(e) => {
                          setEditField({ ...editField, bio: false });
                          handleUserInfoUpdate(e, updatedFields);
                        }}
                        className={`text-0.875 font-semibold underline cursor-pointer ${
                          updatedFields.bio.length <= 0
                            ? "pointer-events-none	opacity-60"
                            : ""
                        }`}
                      >
                        Save
                      </p>
                    </div>
                    <textarea
                      onChange={(e) =>
                        setUpdatedFields({
                          ...updatedFields,
                          bio: e.target.value,
                        })
                      }
                      minLength={1}
                      maxLength={150}
                      id="bio"
                      name="bio"
                      className={`${formInput} pt-4 h-36 bg-white border-1 border-light rounded overflow-scroll`}
                      type="text"
                    />
                  </div>
                ) : (
                  <div className={`${formInputLabelWrapper}`}>
                    <p className={`${formLabel}`}>Bio:</p>
                    <div
                      onClick={() => setEditField({ ...editField, bio: true })}
                      className={`${formInput} overflow-scroll h-36 flex items-start pt-4 justify-between bg-white border-1 border-light rounded`}
                    >
                      {meDetails.bio ? meDetails.bio : ""}
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

import React from "react";
import Link from "next/link";
import { LoginContext } from "../_app";
import { useContext } from "react";
const Custom500 = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2.5 mb-1">500 - Server-side error occurred</h1>
      <Link className="hover:opacity-80" href={"/"}>
        Back to {loggedIn ? "Dashboard" : "Home"}
      </Link>
    </div>
  );
};
export default Custom500;

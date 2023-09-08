import Link from "next/link";
import React from "react";
import { LoginContext } from "../_app";
import { useContext, useState } from "react";
const Custom404 = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2.5 mb-1">404 - Page Not Found</h1>
      <Link className="hover:opacity-80" href={"/"}>
        Back to {loggedIn ? "Dashboard" : "Home"}
      </Link>
    </div>
  );
};

export default Custom404;

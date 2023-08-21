import SignupForm from "@/components/Signup/SignupForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div
      className="bg-cover min-h-screen h-full py-10 flex justify-center md:py-16 "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1633933703119-5d25460ad829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80)`,
      }}
    >
      <div className="md:justify-center w-full max-w-58  flex lg:justify-end">
        <div
          className="w-full h-fit bg-white mx-6 rounded px-4 py-8 pb-12 md:pb-16
                        md:max-w-112 md:mx-0 md:px-16 md:py-10"
        >
          <h2 className="text-2 font-semibold mb-8">Sign up</h2>
          <SignupForm />
          <p className="text-0.875 font-semibold text-center md:text-left">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:opacity-80">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

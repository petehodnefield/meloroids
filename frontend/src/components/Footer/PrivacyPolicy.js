import React from "react";
import Link from "next/link";
const PrivacyPolicy = ({ displayClass }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={` ${displayClass} flex flex-col items-center lg:items-start gap-2`}
    >
      <div className="flex gap-4">
        <Link href={""} className="text-1 font-medium text-light">
          Privacy Policy
        </Link>
        |
        <Link href={""} className="text-1 font-medium text-light">
          Terms of Service
        </Link>
      </div>
      <p className="text-1 font-medium text-light">
        ©{currentYear} Meloroids LLC. All Rights Reserved.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

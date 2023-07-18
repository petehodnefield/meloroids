import React from "react";

const BtnDarkPill = ({ buttonText }) => {
  return (
    <button className="bg-dark text-white  text-1 font-semibold h-12 w-48 rounded-full  hover:opacity-80 duration-200">
      {buttonText}
    </button>
  );
};

export default BtnDarkPill;

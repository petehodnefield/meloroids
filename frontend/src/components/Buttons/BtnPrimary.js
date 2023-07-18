import React from "react";

const BtnPrimary = ({ buttonText }) => {
  return (
    <button className="bg-primary text-white  text-1 font-semibold h-12 w-48 rounded  hover:opacity-80 duration-200">
      {buttonText}
    </button>
  );
};

export default BtnPrimary;

import React from "react";

const ParamsToggle = ({ includeParams, setIncludeParams }) => {
  const toggleOuterSelected = "justify-end  bg-primary";
  const toggleOuterUnselected = "justify-start  bg-light";
  const toggleInnerSelected = "bg-white ";
  const toggleInnerUnselected = "bg-primary ";
  return (
    <div className="flex w-full items-center gap-1  mb-2 ">
      <div
        className={`toggle__outer 	items-center h-6 w-12  rounded-full	flex
        ${includeParams ? toggleOuterSelected : toggleOuterUnselected}`}
        onClick={() => setIncludeParams(!includeParams)}
      >
        <div
          className={`toggle__inner h-full w-6 rounded-full cursor-pointer border-solid border-1 border-neutral-800		
        ${includeParams ? toggleInnerSelected : toggleInnerUnselected}`}
        ></div>
      </div>
      <p className="text-1 font-semibold">Include params</p>
    </div>
  );
};

export default ParamsToggle;

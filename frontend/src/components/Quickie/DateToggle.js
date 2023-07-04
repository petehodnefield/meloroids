import React, { useState } from "react";

export const DateToggle = () => {
  const [includeDate, setIncludeDate] = useState(false);

  // Styles to handle toggle switch
  const toggleOuterSelected = "justify-end  bg-primary";
  const toggleOuterUnselected = "justify-start  bg-light";
  const toggleInnerSelected = "bg-white ";
  const toggleInnerUnselected = "bg-primary ";
  return (
    <div className="flex items-center gap-1 relative right-2 mb-2">
      <div
        className={`toggle__outer 	items-center h-6 w-12  rounded-full	flex
            ${includeDate ? toggleOuterSelected : toggleOuterUnselected}`}
        onClick={() => setIncludeDate(!includeDate)}
      >
        <div
          className={`toggle__inner h-full w-6 rounded-full cursor-pointer border-solid border-1 border-neutral-800		
            ${includeDate ? toggleInnerSelected : toggleInnerUnselected}`}
        ></div>
      </div>
      <p className="text-1 font-semibold">Include date</p>
    </div>
  );
};

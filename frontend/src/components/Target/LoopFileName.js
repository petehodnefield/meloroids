import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const LoopFileName = ({ loopName }) => {
  const iconStyle = "cursor-pointer text-2";

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(loopName).then(() => {}),
      () => {
        console.error("failed to copy");
      };
  };
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, "10000");
  }, [copied]);
  return (
    <div className="relative bg-dark w-full pl-8  pr-16 py-6  text-white flex flex-col  items-center justify-center rounded-b-lg	">
      <p className="text-1 w-full font-semibold text-left">{loopName}</p>
      <div className="absolute right-4 hover:cursor-pointer text-1.5">
        {copied ? (
          <Icon
            className={`${iconStyle} text-green`}
            icon="carbon:checkmark-filled"
            onClick={() => setCopied(!copied)}
          />
        ) : (
          <Icon
            onClick={() => {
              copyToClipboard(loopName);
              setCopied(!copied);
            }}
            className={iconStyle}
            icon="ph:copy"
          />
        )}
      </div>

      {copied ? (
        <div className="text-1 text-primary font-semibold  mt-3 w-full">
          {" "}
          Copied to your clipboard!
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoopFileName;

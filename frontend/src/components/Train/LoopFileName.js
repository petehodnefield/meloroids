import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LoopFileName = ({ loopName }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, "10000");
  }, [copied]);
  return (
    <div className="relative bg-dark w-full h-12 text-white flex items-center justify-center md:rounded-b-lg">
      <p className="text-0.75 font-semibold">{loopName}</p>
      <CopyToClipboard
        className="absolute right-6 hover:cursor-pointer"
        text={loopName}
        onCopy={() => setCopied(true)}
      >
        {copied ? (
          <Icon
            color="#57B534"
            icon="ic:baseline-check-circle"
            className="text-2 "
          />
        ) : (
          <Icon
            className={`${copied ? "hidden" : ""} text-1.125 hover:opacity-60`}
            icon="ph:copy-simple"
          />
        )}
      </CopyToClipboard>
      {copied ? (
        <div className="absolute top-14 text-0.875">
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

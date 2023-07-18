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
    <div className="relative bg-dark w-full h-20 text-white flex flex-col items-center justify-center rounded-b-4xl	">
      <p className="text-1 font-semibold">{loopName}</p>
      <CopyToClipboard
        className="absolute right-4 hover:cursor-pointer text-1.5"
        text={loopName}
        onCopy={() => setCopied(true)}
      >
        {copied ? (
          <Icon
            color="#57B534"
            icon="ic:baseline-check-circle"
            className="text-2.5"
          />
        ) : (
          <Icon
            className={`${copied ? "hidden" : ""} h-8 hover:opacity-60`}
            icon="ph:copy-simple"
          />
        )}
      </CopyToClipboard>
      {copied ? (
        <div className="text-1 text-primary font-semibold">
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

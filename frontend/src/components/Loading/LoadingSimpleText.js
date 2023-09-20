import React, { useEffect, useState } from "react";

const LoadingSimpleText = () => {
  const [loadingMessage, setLoadingMessage] = useState("loading");
  useEffect(() => {
    const messages = ["loading", "loading.", "loading..", "loading..."];
    let index = 1;
    setInterval(() => {
      setLoadingMessage(messages[index]);
      index = index + 1;
      if (index === 4) {
        index = 0;
      }
    }, "500");
  }, []);
  return (
    <div className="flex justify-center ">
      <p className="text-1.5 text-dark">{loadingMessage}</p>
    </div>
  );
};

export default LoadingSimpleText;

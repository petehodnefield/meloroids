import React, { useState, useEffect } from "react";

const TimerStart = ({ startTimer }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);

  // if
  // Time handler
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds === 0 && minutes === 0) {
      clearInterval(interval);
      window.location.replace("/");
    } else if (seconds < 0) {
      clearInterval(interval);
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div
      className={`fixed bottom-0 text-white w-screen h-16 flex justify-center items-center
        ${!startTimer ? "hidden" : ""}
        ${minutes === 0 && seconds < 5 ? "bg-dark" : " bg-primary"}`}
    >
      {seconds < 10 ? (
        <h3
          className={`text-2 font-semibold
                ${minutes === 0 && seconds < 5 ? "text-2.5 text-red" : ""}`}
        >
          {minutes}:0{seconds}
        </h3>
      ) : (
        <h3 className="text-2 font-semibold">
          {minutes}:{seconds}
        </h3>
      )}
    </div>
  );
};

export default TimerStart;

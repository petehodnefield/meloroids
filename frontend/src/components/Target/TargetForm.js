import React, { useState, useEffect } from "react";
import BtnDark from "../Buttons/BtnDark";
import KeyInput from "./KeyInput";
import ProgressionInput from "./ProgressionInput";
import StyleInput from "./StyleInput";
import TempoInput from "./TempoInput";
import Link from "next/link";

const TargetForm = ({ handleChange, checkboxChecked }) => {
  const hoverStyle =
    "hover:box-border	 hover:ml-2 hover:mr-8 hover:cursor-pointer hover:bg-blue hover:text-white duration-100";

  const [melodyParams, setMelodyParams] = useState({
    genre: "",
    genreId: "",
    progression: "",
    progressionId: "",
    is_major: "",
    key: "",
    keyId: "",
    tempo: 120,
    producerHandle: "mongamonga",
  });

  // On save, save field to localStorage
  const saveProducerName = (e) => {
    e.preventDefault();
    localStorage.setItem("producerName", melodyParams.producerHandle);
  };

  useEffect(() => {
    const localRetrieve = localStorage.getItem("producerName");
    console.log(localRetrieve);
    if (localRetrieve) {
      setMelodyParams({
        ...melodyParams,
        producerHandle: "mongamonga",
      });
    }
    console.log(melodyParams);
  }, []);
  useEffect(
    () =>
      setMelodyParams({
        ...melodyParams,
        progression: "",
        key: "",
      }),
    [melodyParams.genre]
  );

  return (
    <form className="flex flex-col items-center w-full px-6" action="">
      <StyleInput
        melodyParams={melodyParams}
        setMelodyParams={setMelodyParams}
        hoverStyle={hoverStyle}
        handleChange={handleChange}
        checkboxChecked={checkboxChecked}
      />
      <ProgressionInput
        melodyParams={melodyParams}
        setMelodyParams={setMelodyParams}
        hoverStyle={hoverStyle}
        handleChange={handleChange}
        checkboxChecked={checkboxChecked}
      />
      <KeyInput
        melodyParams={melodyParams}
        setMelodyParams={setMelodyParams}
        hoverStyle={hoverStyle}
        handleChange={handleChange}
        checkboxChecked={checkboxChecked}
      />
      <TempoInput
        melodyParams={melodyParams}
        setMelodyParams={setMelodyParams}
        hoverStyle={hoverStyle}
        handleChange={handleChange}
        checkboxChecked={checkboxChecked}
      />

      {checkboxChecked.allRandom ? (
        <Link href={`/train/random`}>
          <button
            className={`bg-dark text-white  text-1 font-semibold h-12 w-48 rounded  hover:opacity-80  button-fade-in`}
          >
            Start
          </button>
        </Link>
      ) : (
        <Link
          href={`/train/${melodyParams.genreId}/${melodyParams.progressionId}/${melodyParams.keyId}/${melodyParams.tempo}`}
          className={`${
            !melodyParams.genreId ||
            !melodyParams.keyId ||
            !melodyParams.progressionId
              ? "pointer-events-none opacity-30"
              : " button-fade-in"
          }`}
        >
          <button
            className={`bg-dark text-white  text-1 font-semibold h-12 w-48 rounded  hover:opacity-80 duration-200`}
          >
            Start
          </button>
        </Link>
      )}
    </form>
  );
};

export default TargetForm;

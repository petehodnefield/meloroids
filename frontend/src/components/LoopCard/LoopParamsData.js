import React from "react";
import ReferenceCard from "../Header/ArtistTarget/ReferenceCard";
import { Icon } from "@iconify/react";
import { randomWord, newRandomWord } from "../../../utils/data/words";
import LoopFileName from "../Target/LoopFileName";
const LoopParamsData = ({
  splitChords,
  splitNumerals,
  songParams,
  loopName,
  loopNameParams,
  setLoopNameParams,
}) => {
  let index = 0;
  return (
    <div className="relative w-full max-w-24 md:w-96 flex flex-col items-start pt-10 mb-12   bg-white rounded-lg md:mb-6">
      <Icon
        className="absolute top-8 right-8 text-2 hover:cursor-pointer mb-6 md:mb-4 hover:opacity-80"
        icon="mdi:dice-6"
        onClick={() =>
          setLoopNameParams({ ...loopNameParams, randomWord: newRandomWord() })
        }
      />
      <div className="w-full px-6">
        {/* Loop Title */}
        <p className="text-0.75 font-semibold uppercase">Your Loop:</p>
        <h2 className="text-2.5 text-primary font-semibold mb-6">
          {loopNameParams.randomWord}
        </h2>
        {/* Data wrapper */}
        <div className="pb-6">
          <div className="flex flex-col items-start mb-6 ">
            <h3 className="text-1 font-semibold text-medium mb-3">
              🎼 Chords (literal):
            </h3>
            <div className="flex gap-3 flex-wrap">
              {splitChords.map((chord) => (
                <div
                  key={`${chord} ${index++}`}
                  className="flex items-center justify-center bg-primary rounded-full w-16 h-16 border-1 border-dark text-white "
                >
                  <p className="text-1.5 font-semibold">{chord}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-1 font-semibold text-medium mb-3">
              🎼 Chords (numerals):
            </h3>
            <div className="flex gap-3 flex-wrap">
              {splitNumerals.map((numeral) => (
                <div
                  key={`${numeral} ${index++}`}
                  className="flex items-center justify-center bg-dark rounded-full w-16 h-16 text-white "
                >
                  <p className="text-1.5 font-semibold">{numeral}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-1 font-semibold text-medium ">🔑 Key:</h3>
            <p className="text-2 font-semibold">{songParams.key}</p>
          </div>
          <div className="flex flex-col items-start ">
            <h3 className="text-1 font-semibold text-medium">🏃🏽‍♂️ Tempo:</h3>
            <p className="text-2 font-semibold"> {songParams.tempo} BPM</p>
          </div>
        </div>
      </div>
      <LoopFileName loopName={loopName}></LoopFileName>
    </div>
  );
};

export default LoopParamsData;

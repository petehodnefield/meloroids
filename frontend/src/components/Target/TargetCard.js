import React from "react";
import Image from "next/image";
import studioImage from "../../../public/assets/images/music-studio.png";
import LoopFileName from "./LoopFileName";
import { randomWord } from "../../../utils/data/words";
const TargetCard = ({
  splitChords,
  splitNumerals,
  loopName,
  loopNameParams,
}) => {
  return (
    <div className=" relative bg-cover min-h-screen  flex items-start justify-center px-6">
      <Image
        alt="a music studio background"
        className="absolute w-full h-full object-cover"
        src={studioImage}
        priority
      />
      <div className="flex flex-col items-center w-full md:py-12  lg:max-w-48 lg:justify-between  py-8">
        {/* White bg for content */}
        <div className="relative w-full flex flex-col items-center pt-10  bg-white md:max-w-26 rounded-4xl md:mb-6">
          {/* Loop Title */}
          <h2 className="text-2.5 text-primary font-semibold mb-8">
            {randomWord}
          </h2>
          {/* Data wrapper */}
          <div className="pb-6">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium mb-3">
                🎼 Chords (literal):
              </h3>
              <div className="flex gap-3">
                {splitChords.map((chord) => (
                  <div
                    key={chord}
                    className="flex items-center justify-center bg-primary rounded-full w-16 h-16 border-1 border-dark text-white "
                  >
                    <p className="text-1.5 font-semibold">{chord}</p>
                  </div>
                ))}
              </div>
              {/* <p className="text-2 font-semibold">
            {loopNameParams.chordsLiteral}
          </p> */}
            </div>
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium mb-3">
                🎼 Chords (numerals):
              </h3>
              <div className="flex gap-3">
                {splitNumerals.map((numeral) => (
                  <div
                    key={numeral}
                    className="flex items-center justify-center bg-dark rounded-full w-16 h-16 text-white "
                  >
                    <p className="text-1.5 font-semibold">{numeral}</p>
                  </div>
                ))}
              </div>
              {/* <p className="text-2 font-semibold">
            {loopNameParams.chordsNumerals}
          </p> */}
            </div>

            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium ">🔑 Key:</h3>
              <p className="text-2 font-semibold">{loopNameParams.key}</p>
            </div>
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium">🏃🏽‍♂️ Tempo:</h3>
              <p className="text-2 font-semibold">
                {" "}
                {loopNameParams.tempo} BPM
              </p>
            </div>
          </div>
          <LoopFileName loopName={loopName}></LoopFileName>
        </div>
      </div>
    </div>
  );
};

export default TargetCard;

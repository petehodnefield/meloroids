import React from "react";
import ReferenceCard from "../Header/ArtistTarget/ReferenceCard";
import { Icon } from "@iconify/react";
import { randomWord } from "../../../utils/data/words";
import LoopFileName from "../Target/LoopFileName";
import LoopParamsData from "./LoopParamsData";
import ParamsToggle from "../Toggles/ParamsToggle";
import DateToggle from "../Toggles/DateToggle";
import { btn } from "../../../utils/styles";
const LoopParamsArtistTarget = ({
  referenceInfo,
  splitChords,
  splitNumerals,
  songParams,
  loopName,
  loopNameParams,
  setLoopNameParams,
  randomlyChosenSong,
  data,
  setReroll,
  reroll,
  includeDate,
  setIncludeDate,
  includeParams,
  setIncludeParams,
}) => {
  return (
    <div className="flex flex-col w-full items-center px-6 gap-8  lg:flex-row lg:items-start justify-center ">
      {referenceInfo ? (
        <div className="order-2 z-5 relative w-full max-w-24 flex-col flex items-center gap-4">
          <ReferenceCard referenceInfo={referenceInfo} />
          <button
            onClick={() => {
              setReroll(!reroll);
            }}
            className={`${btn} bg-primary text-white`}
          >
            Change song
          </button>
          <div className="bg-dark w-full max-w-24 lg:w-fit  text-white relative flex flex-col text-start md:text-center items-start lg:items-center py-6 rounded-lg px-8">
            <h3 className="text-1.25 mb-4">Format loop</h3>
            <div className="flex w-full flex-col flex-nowrap lg:gap-2">
              <DateToggle
                includeDate={includeDate}
                setIncludeDate={setIncludeDate}
              />
              <ParamsToggle
                includeParams={includeParams}
                setIncludeParams={setIncludeParams}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <LoopParamsData
        splitChords={splitChords}
        splitNumerals={splitNumerals}
        songParams={songParams}
        loopName={loopName}
        loopNameParams={loopNameParams}
        setLoopNameParams={setLoopNameParams}
      />{" "}
    </div>
  );
};

export default LoopParamsArtistTarget;

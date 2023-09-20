import React, { useState } from "react";
import ReferenceCard from "../Header/ArtistTarget/ReferenceCard";
import { Icon } from "@iconify/react";
import { randomWord } from "../../../utils/data/words";
import LoopFileName from "../Target/LoopFileName";
import DateToggle from "../Toggles/DateToggle";
import LoopParamsData from "./LoopParamsData";
import ParamsToggle from "../Toggles/ParamsToggle";
const LoopParamsTarget = ({
  referenceInfo,
  splitChords,
  splitNumerals,
  songParams,
  loopName,
  loopNameParams,
  setLoopNameParams,
  includeDate,
  setIncludeDate,
  includeParams,
  setIncludeParams,
}) => {
  return (
    <div className="w-full lg:max-w-70 flex flex-col items-center px-6 gap-8 mt-12  lg:flex-row lg:items-start lg:justify-center  ">
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
      <LoopParamsData
        splitChords={splitChords}
        splitNumerals={splitNumerals}
        songParams={songParams}
        loopName={loopName}
        loopNameParams={loopNameParams}
        setLoopNameParams={setLoopNameParams}
        includeDate={includeDate}
        includeParams={includeParams}
      />{" "}
    </div>
  );
};

export default LoopParamsTarget;

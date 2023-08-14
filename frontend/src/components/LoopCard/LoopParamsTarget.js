import React from "react";
import ReferenceCard from "../Header/ArtistTarget/ReferenceCard";
import { Icon } from "@iconify/react";
import { randomWord } from "../../../utils/data/words";
import LoopFileName from "../Target/LoopFileName";
import LoopParamsData from "./LoopParamsData";
const LoopParamsTarget = ({
  referenceInfo,
  splitChords,
  splitNumerals,
  songParams,
  loopName,
}) => {
  return (
    <div className="flex flex-col items-center px-6 gap-8 mt-12  lg:flex-row lg:items-start lg:justify-between  ">
      <LoopParamsData
        splitChords={splitChords}
        splitNumerals={splitNumerals}
        songParams={songParams}
        loopName={loopName}
      />{" "}
    </div>
  );
};

export default LoopParamsTarget;

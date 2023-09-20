import React from "react";
import ReferenceCard from "../Header/ArtistTarget/ReferenceCard";
import { Icon } from "@iconify/react";
import { randomWord } from "../../../utils/data/words";
import LoopFileName from "../Target/LoopFileName";
import LoopParamsData from "./LoopParamsData";
const LoopParamsArtistTarget = ({
  referenceInfo,
  splitChords,
  splitNumerals,
  songParams,
  loopName,
  loopNameParams,
  setLoopNameParams,
}) => {
  return (
    <div className="flex flex-col w-full items-center px-6 gap-8  lg:flex-row lg:items-start justify-center ">
      {referenceInfo ? <ReferenceCard referenceInfo={referenceInfo} /> : ""}
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

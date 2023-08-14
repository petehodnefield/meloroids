import React from "react";

const ReferenceCard = ({ referenceInfo }) => {
  return (
    <div className="bg-white z-5 relative flex flex-col items-center pt-6 pb-8 px-6 rounded-lg">
      <div className="h-80 w-full mb-5 ">
        <img
          src={referenceInfo.referenceAlbumArtwork}
          className="rounded-lg h-full w-full object-cover"
        />
      </div>{" "}
      <div className="flex flex-col w-full">
        <h2 className="text-primary font-medium text-0.875 uppercase mb-1.5">
          Reference:
        </h2>
        <h3 className="text-1.5 mb-1 font-semibold	">
          {referenceInfo.referenceSongName}
        </h3>{" "}
        <h4 className="text-1.125">{referenceInfo.referenceAlbumName}</h4>
      </div>
    </div>
  );
};

export default ReferenceCard;

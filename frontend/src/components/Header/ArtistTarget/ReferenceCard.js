import React from "react";

const ReferenceCard = ({ referenceInfo }) => {
  return (
    <div className="bg-white z-5 relative flex flex-col items-center pt-8 pb-6 px-6 rounded-3xl">
      <h2 className="text-1.5 font-medium text-primary mb-4">
        Reference Song:
      </h2>
      <div className="h-80 w-80 mb-6 ">
        <img
          src={referenceInfo.referenceAlbumArtwork}
          className="rounded-lg h-full w-full object-cover"
        />
      </div>{" "}
      <h3 className="text-1.25 mb-1 font-bold">
        {referenceInfo.referenceSongName}
      </h3>{" "}
      <h4 className="text-1">{referenceInfo.referenceAlbumName}</h4>
    </div>
  );
};

export default ReferenceCard;

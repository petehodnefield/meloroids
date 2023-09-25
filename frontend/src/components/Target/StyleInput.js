import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_GENRES } from "../../../utils/queries";
import LoadingSimpleText from "../Loading/LoadingSimpleText";

const StyleInput = ({
  setMelodyParams,
  melodyParams,
  hoverStyle,
  handleChange,
  checkboxChecked,
}) => {
  const [styleOpen, setStyleOpen] = useState(false);

  const {
    loading: genreLoading,
    error: genreError,
    data: genreData,
  } = useQuery(ALL_GENRES);

  if (genreLoading) return <LoadingSimpleText />;

  return (
    // Style Input
    <div className="w-full relative mb-6">
      <div className="flex justify-between items-center w-full">
        <label className="text-0.875 font-semibold">Style</label>
      </div>
      <div
        className={`h-12 w-full border-2 rounded-lg flex justify-between items-center  
                ${
                  checkboxChecked.styleRandom
                    ? "pointer-events-none bg-medium opacity-40"
                    : ""
                }`}
        onClick={() => setStyleOpen(!styleOpen)}
      >
        <div className="w-12 text-center">🎶</div>
        <p className="text-left w-full text-0.875 font-semibold">
          {melodyParams.genre}
        </p>
        <div className="w-12 h-12 flex items-center justify-center"> ⌄</div>
      </div>
      {/* Style dropdown */}
      {styleOpen ? (
        <div className="border-2 rounded-lg absolute w-full mt-3 menu-dropdown bg-white z-40 max-h-14 overflow-scroll">
          {genreData.genres.map((genre) =>
            genre.progressions.length === 0 ? (
              ""
            ) : (
              <div
                key={genre.genre}
                className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                onClick={() => {
                  setMelodyParams({
                    ...melodyParams,
                    genre: genre.genre,
                    genreId: genre._id,
                  });
                  setStyleOpen(!styleOpen);
                }}
              >
                <div className="w-12 text-center">🎶</div>
                <p className="text-left w-full text-0.875 font-semibold">
                  {genre.genre}
                </p>
              </div>
            )
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StyleInput;

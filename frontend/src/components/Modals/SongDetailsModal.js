import React from "react";
import { Icon } from "@iconify/react";
import { useQuery } from "@apollo/client";
import { PROGRESSION_IN_SPECIFIC_KEY } from "../../../utils/queries";
const SongDetailsModal = ({ setSongModalOpen, selectedSong }) => {
  let count = 0;
  const { loading, data } = useQuery(PROGRESSION_IN_SPECIFIC_KEY, {
    variables: {
      numerals: selectedSong.progression[0].numerals,
      key: selectedSong.key[0].key,
    },
  });

  if (loading) return <div>Loading...</div>;
  const splitNumerals = selectedSong.progression[0].numerals.split(" ");

  const splitLiterals =
    data.progressionInSpecificKey.progression_in_key.split(" ");
  console.log(splitLiterals);
  return (
    <div className="absolute top-0 h-full w-full bg-darkScreen flex items-start px-6 py-12 justify-center z-20">
      <div className="w-full md:w-96 relative border-dark border-1 bg-white shadow-3xl flex flex-col items-start pt-10 pb-8 px-6 rounded-xl">
        <Icon
          className="absolute top-4 right-4 text-1.5 cursor-pointer"
          icon="octicon:x-12"
          onClick={() => setSongModalOpen(false)}
        />
        <h2 className="font-semibold text-2 mb-6">{selectedSong.song_name}</h2>
        <div className="flex justify-start w-full mb-6">
          <div className="flex flex-col items-start flex-1">
            <h3 className="text-1 font-semibold">Key</h3>
            <p className="text-1.25">
              {selectedSong.key[0].is_major
                ? `${selectedSong.key[0].key}`
                : `${selectedSong.key[0].key}-`}
            </p>
          </div>
          <div className="flex flex-col items-start flex-1">
            <h3 className="text-1 font-semibold">Tempo</h3>
            <p className="text-1.25">{selectedSong.tempo} bpm</p>
          </div>
        </div>
        <div className="flex flex-col items-start mb-4">
          {" "}
          <h3 className="text-1 font-semibold">Chords (numerals)</h3>
          <div className="flex gap-1 flex-wrap">
            {splitNumerals.map((numeral) => (
              <div
                key={`${numeral} ${count++}`}
                className="h-16 w-16 bg-light rounded-full flex items-center justify-center "
              >
                <p className="text-1.25 font-semibold">{numeral}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          {" "}
          <h3 className="text-1 font-semibold">Chords (literal)</h3>
          <div className="flex gap-1 flex-wrap">
            {splitLiterals.map((literal) => (
              <div
                key={`${literal} ${count++}`}
                className="h-16 w-16 bg-primary text-white rounded-full flex items-center justify-center "
              >
                <p className="text-1.25 font-semibold">{literal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetailsModal;

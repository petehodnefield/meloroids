import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PROGRESSIONS, ALL_KEYS } from "../../../../utils/queries";
import { randomWord } from "../../../../utils/data/words";
import LoopFileName from "../../../components/Train/LoopFileName";
import { Icon } from "@iconify/react";
import Link from "next/link";

const RandomTrain = () => {
  const [loopName, setLoopName] = useState(randomWord);

  const {
    loading: progressionLoading,
    data: progressionData,
    error: progressionError,
  } = useQuery(ALL_PROGRESSIONS);

  const {
    loading: keyLoading,
    data: keyData,
    error: keyError,
  } = useQuery(ALL_KEYS);

  if (progressionLoading || keyLoading) return <div>Loading...</div>;
  if (progressionError || keyError) return <div>Error!</div>;

  // Pull a random key from ALL_KEYS query
  const randomKeyIndex = Math.floor(Math.random() * keyData.keys.length);
  const randomKey = keyData.keys[randomKeyIndex];
  // console.log("Random Key", randomKey);

  //   Pull a random progression from the ALL_PROGRESSIONS query
  const allMatchingKeyProgressions = progressionData.progressions.filter(
    (progression) => progression.is_major === randomKey.is_major
  );
  const randomIndex = Math.floor(
    Math.random() * allMatchingKeyProgressions.length
  );
  const randomProgression = allMatchingKeyProgressions[randomIndex];
  //   Match the chosen progression to display the correct key
  const allKeysMatch = randomProgression.all_keys.filter(
    (all_keys) => all_keys.key === randomKey.key
  );
  // console.log("Random Progression", randomProgression);
  // console.log("All Keys Match", allKeysMatch);

  //   Assign clearer variable names
  const key = randomKey.key;
  const progression = allKeysMatch[0].progression_in_key;
  const numerals = randomProgression.numerals;
  const tempo = Math.floor(Math.random() * (200 - 60) + 60);

  const loopFileName = loopName
    .concat(" ")
    .concat(tempo + " bpm ")
    .concat(key.toLowerCase())
    .concat(randomKey.is_major ? ` major ` : ` minor `)
    .concat("@mongamonga_");

  return (
    <div
      className="bg-cover min-h-screen  flex items-start justify-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)`,
      }}
    >
      <div className="flex flex-col items-center w-full md:py-12  lg:max-w-48 lg:justify-between">
        {/* White bg for content */}
        <div className="relative w-full flex flex-col items-center pt-10  bg-white md:max-w-26 md:rounded-lg md:mb-6">
          {/* Reroll Icon */}
          <Link onClick={() => setLoopName(randomWord())} href="/train/random">
            <Icon
              className="absolute top-4 right-4 text-2 hover:cursor-pointer hover:opacity-80"
              icon="mdi:dice-6"
            />
          </Link>

          {/* Loop Title */}
          <h2 className="text-2.5 text-primary font-semibold mb-8">
            {randomWord}
          </h2>
          {/* Data wrapper */}
          <div className="pb-6">
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">
                🎼 Chords (literal):
              </h3>
              <p className="text-2 font-semibold">{progression}</p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">
                🎼 Chords (numerals):
              </h3>
              <p className="text-2 font-semibold">{numerals}</p>
            </div>

            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">🔑 Key:</h3>
              <p className="text-2 font-semibold">
                {key} {randomKey.is_major ? `Major` : `Minor`}
              </p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">🏃🏽‍♂️ Tempo:</h3>
              <p className="text-2 font-semibold"> {tempo} BPM</p>
            </div>
          </div>
          <LoopFileName loopName={loopFileName}></LoopFileName>
        </div>
      </div>
    </div>
  );
};

export default RandomTrain;

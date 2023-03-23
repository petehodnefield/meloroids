import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_PROGRESSIONS, ALL_KEYS } from "../../../../utils/queries";

const RandomTrain = () => {
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
  console.log("Random Key", randomKey);

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
  console.log("Random Progression", randomProgression);
  console.log("All Keys Match", allKeysMatch);

  //   Assign clearer variable names
  const key = randomKey.key;
  const progression = allKeysMatch[0].progression_in_key;
  const numerals = randomProgression.numerals;
  const tempo = Math.floor(Math.random() * (200 - 60) + 60);

  console.log("Tempo", tempo);
  return (
    <div>
      {numerals} {progression} {tempo} {key}
    </div>
  );
};

export default RandomTrain;

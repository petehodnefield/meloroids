import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PROGRESSIONS, ALL_KEYS } from "../../../utils/queries";
import { randomWord } from "../../../utils/data/words";
import { formattedToday } from "../../../utils/dates";
import studioImage from "../../../public/assets/images/music-studio.jpg";
import Image from "next/image";
import LoopParamsTarget from "../../components/LoopCard/LoopParamsTarget";

const TargetDemo = () => {
  const [isHyrdrated, setIsHydrated] = useState(false);
  const randomTempo = Math.floor(Math.random() * (200 - 60) + 60);
  const [reloadPage, setReloadPage] = useState(true);
  const [loopNameParams, setLoopNameParams] = useState({
    randomWord: randomWord,
    tempo: randomTempo,
    key: "",
    producer: "",
    chordsLiteral: "",
    chordsNumerals: "",
  });
  const [loopName, setLoopName] = useState("");
  const [includeDate, setIncludeDate] = useState(false);
  const [includeParams, setIncludeParams] = useState(true);

  const {
    loading: progressionLoading,
    data: progressionData,
    error: progressionError,
    refetch: refetchProgressions,
  } = useQuery(ALL_PROGRESSIONS);
  const {
    loading: keyLoading,
    data: keyData,
    error: keyError,
    refetch: refetchKeys,
  } = useQuery(ALL_KEYS);

  //   Set hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (includeDate && includeParams) {
      setLoopName(
        `${loopNameParams.randomWord} ${loopNameParams.tempo} bpm ${loopNameParams.key} @${loopNameParams.producer} ${formattedToday}`
      );
    } else if (!includeDate && includeParams) {
      setLoopName(
        `${loopNameParams.randomWord} ${loopNameParams.tempo} bpm ${loopNameParams.key} @${loopNameParams.producer} `
      );
    } else if (includeDate && !includeParams) {
      setLoopName(
        `${loopNameParams.randomWord} @${loopNameParams.producer} ${formattedToday}`
      );
    } else if (!includeDate && !includeParams) {
      setLoopName(`${loopNameParams.randomWord} @${loopNameParams.producer}`);
    }
  }, [includeDate, includeParams]);
  useEffect(() => {
    if (includeDate && includeParams) {
      setLoopName(
        `${loopNameParams.randomWord} ${loopNameParams.tempo} bpm ${loopNameParams.key} @${loopNameParams.producer} ${formattedToday}`
      );
    } else if (!includeDate && includeParams) {
      setLoopName(
        `${loopNameParams.randomWord} ${loopNameParams.tempo} bpm ${loopNameParams.key} @${loopNameParams.producer} `
      );
    } else if (includeDate && !includeParams) {
      setLoopName(
        `${loopNameParams.randomWord} @${loopNameParams.producer} ${formattedToday}`
      );
    } else if (!includeDate && !includeParams) {
      setLoopName(`${loopNameParams.randomWord} @${loopNameParams.producer}`);
    }
  }, [loopNameParams]);

  const newParams = async () => {
    // Pull a random key from ALL_KEYS query
    const randomKeyIndex = Math.floor(Math.random() * keyData.keys.length);
    const randomKey = keyData.keys[randomKeyIndex];

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

    setLoopNameParams({
      ...loopNameParams,
      key: `${allKeysMatch[0].key.toLowerCase()} ${
        randomKey.is_major ? "major" : "minor"
      }`,
      chordsLiteral: allKeysMatch[0].progression_in_key,
      chordsNumerals: randomProgression.numerals,
      producer: meData.me.instagramHandle,
      tempo: Math.floor(Math.random() * (200 - 60) + 60),
    });
  };

  useEffect(() => {
    if (
      !keyData ||
      !keyData.keys ||
      !progressionData ||
      !progressionData.progressions
    ) {
      return;
    }

    // Pull a random key from ALL_KEYS query
    const randomKeyIndex = Math.floor(Math.random() * keyData.keys.length);
    const randomKey = keyData.keys[randomKeyIndex];

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

    setLoopNameParams({
      ...loopNameParams,
      key: `${allKeysMatch[0].key.toLowerCase()} ${
        randomKey.is_major ? "major" : "minor"
      }`,
      chordsLiteral: allKeysMatch[0].progression_in_key,
      chordsNumerals: randomProgression.numerals,
      producer: "YOURINSTAGRAMHANDLE",
      tempo: Math.floor(Math.random() * (200 - 60) + 60),
    });
  }, [keyData, progressionData]);

  const splitChords = loopNameParams.chordsLiteral.split(" ");
  const splitNumerals = loopNameParams.chordsNumerals.split(" ");

  if (!isHyrdrated) return <div>Loading...</div>;
  return (
    <div className=" relative bg-cover min-h-screen  flex flex-col items-center justify-start  py-12">
      <Image
        priority
        alt="a music studio background"
        className="absolute top-0 w-full h-full object-cover"
        src={studioImage}
      />{" "}
      <LoopParamsTarget
        splitChords={splitChords}
        splitNumerals={splitNumerals}
        loopName={loopName}
        songParams={loopNameParams}
        loopNameParams={loopNameParams}
        setLoopNameParams={setLoopNameParams}
        includeDate={includeDate}
        setIncludeDate={setIncludeDate}
        includeParams={includeParams}
        setIncludeParams={setIncludeParams}
      />
    </div>
  );
};

export default TargetDemo;

import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../_app";
import { useQuery } from "@apollo/client";
import { ALL_PROGRESSIONS, ALL_KEYS, ME } from "../../../../utils/queries";
import { randomWord } from "../../../../utils/data/words";
import Login from "../../login/index";

import Image from "next/image";
import studioImage from "../../../../public/assets/images/music-studio.png";
import LoadingWhiteText from "../../../components/Loading/LoadingFullScreen";
import Error from "../../../components/Error/Error";

import LoopParamsTarget from "../../../components/LoopCard/LoopParamsTarget";
import { formattedToday } from "../../../../utils/dates";
const RandomTrain = () => {
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
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [includeDate, setIncludeDate] = useState(false);
  const [includeParams, setIncludeParams] = useState(true);

  const { loading: meLoading, data: meData, error: meError } = useQuery(ME);

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

  useEffect(() => {
    if (meData === undefined || meData.me === null) {
      return;
    } else if (meData.me.username) {
      window.scrollTo(0, 0);

      const me = meData.me.instagramHandle;
      setLoopNameParams({
        ...loopNameParams,
        producer: me,
      });
    }
  }, [meData]);
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
      producer: meData.me.instagramHandle,
      tempo: Math.floor(Math.random() * (200 - 60) + 60),
    });
  }, [keyData, progressionData]);

  useEffect(() => {
    if (
      !keyData ||
      !keyData.keys ||
      !progressionData ||
      !progressionData.progressions
    ) {
      return;
    }
    newParams();
  }, [reloadPage]);

  if (progressionLoading || keyLoading || meLoading)
    return <LoadingWhiteText />;
  if (progressionError || keyError || meError)
    return (
      <div>
        <Error />
      </div>
    );
  if (!loggedIn) return <Login />;

  const splitChords = loopNameParams.chordsLiteral.split(" ");
  const splitNumerals = loopNameParams.chordsNumerals.split(" ");

  return (
    <div className=" relative bg-cover min-h-screen  flex flex-col items-center justify-start py-8 lg:py-12 ">
      <Image
        priority
        alt="a music studio background"
        className="absolute top-0 w-full h-full object-cover"
        src={studioImage}
      />{" "}
      <button
        onClick={() => {
          setReloadPage(!reloadPage);
        }}
        className="relative bg-primary text-white h-12 rounded w-44 mb-6 lg:mb-8"
      >
        New Parameters
      </button>
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

export default RandomTrain;

import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../_app";
import { useQuery } from "@apollo/client";
import { ALL_PROGRESSIONS, ALL_KEYS, ME } from "../../../../utils/queries";
import { randomWord } from "../../../../utils/data/words";
import LoopFileName from "../../../components/Target/LoopFileName";
import Login from "../../login/index";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import studioImage from "../../../../public/assets/images/music-studio.png";
import LoadingWhiteText from "../../../components/Loading/LoadingWhiteText";
import Error from "../../../components/Error/Error";
import TargetCard from "../../../components/Target/TargetCard";
import LoopParamsData from "../../../components/LoopCard/LoopParamsData";
import LoopParamsTarget from "../../../components/LoopCard/LoopParamsTarget";

const RandomTrain = () => {
  const randomTempo = Math.floor(Math.random() * (200 - 60) + 60);
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

  const { loading: meLoading, data: meData, error: meError } = useQuery(ME);

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

  useEffect(() => {
    if (meData === undefined || meData.me === null) {
      return;
    } else if (meData.me.username) {
      const me = meData.me.instagramHandle;
      setLoopNameParams({
        ...loopNameParams,
        producer: me,
      });
    }
  }, [meData]);

  useEffect(() => {
    console.log("loop name", loopNameParams);
    setLoopName(
      `${loopNameParams.randomWord} ${loopNameParams.tempo} bpm ${loopNameParams.key} @${loopNameParams.producer}`
    );
  }, [loopNameParams]);

  useEffect(() => {
    if (
      keyData === undefined ||
      keyData.keys === null ||
      progressionData === undefined ||
      progressionData.progressions === null
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

    console.log("progressionData", randomProgression);

    setLoopNameParams({
      ...loopNameParams,
      key: `${allKeysMatch[0].key.toLowerCase()} ${
        randomKey.is_major ? "major" : "minor"
      }`,
      chordsLiteral: allKeysMatch[0].progression_in_key,
      chordsNumerals: randomProgression.numerals,
    });
  }, [keyData, progressionData]);

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
    <div className=" relative bg-cover min-h-screen  flex flex-col items-center justify-start  ">
      <Image
        alt="a music studio background"
        className="absolute w-full h-full object-cover"
        src={studioImage}
      />{" "}
      <LoopParamsTarget
        splitChords={splitChords}
        splitNumerals={splitNumerals}
        loopName={loopName}
        songParams={loopNameParams}
      />
    </div>
  );
};

export default RandomTrain;

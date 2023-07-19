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

const RandomTrain = () => {
  const randomTempo = Math.floor(Math.random() * (200 - 60) + 60);
  const [loopNameParams, setLoopNameParams] = useState({
    randomWord: randomWord,
    tempo: randomTempo,
    key: "",
    producer: "",
    numerals: "",
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

    console.log("allkeys", allKeysMatch);

    setLoopNameParams({
      ...loopNameParams,
      key: `${allKeysMatch[0].key.toLowerCase()} ${
        randomKey.is_major ? "major" : "minor"
      }`,
      numerals: allKeysMatch[0].progression_in_key,
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

  return (
    <div className="relative bg-cover min-h-screen  flex items-start justify-center px-6 ">
      <Image
        alt="a music studio background"
        className="absolute w-full h-full object-cover"
        src={studioImage}
      />
      <div className="flex flex-col items-center w-full py-8  lg:max-w-48 lg:justify-between">
        {/* White bg for content */}
        <div className="relative w-full flex flex-col items-center pt-10  bg-white md:max-w-26 rounded-4xl md:mb-6">
          {/* Reroll Icon */}
          <Link onClick={() => setLoopName(randomWord())} href="/target/random">
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
              <p className="text-2 font-semibold">{loopNameParams.key}</p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">
                🎼 Chords (numerals):
              </h3>
              <p className="text-2 font-semibold">{loopNameParams.numerals}</p>
            </div>

            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">🔑 Key:</h3>
              <p className="text-2 font-semibold">{loopNameParams.key}</p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">🏃🏽‍♂️ Tempo:</h3>
              <p className="text-2 font-semibold">
                {" "}
                {loopNameParams.tempo} BPM
              </p>
            </div>
          </div>
          <LoopFileName loopName={loopName}></LoopFileName>
        </div>
      </div>
    </div>
  );
};

export default RandomTrain;

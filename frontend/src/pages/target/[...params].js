import { useQuery } from "@apollo/client";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../_app";
import { initializeApollo } from "../../../lib/apollo";
import { randomWord } from "../../../utils/data/words";
import { PROGRESSION_BY_ID, KEY_BY_ID, ME } from "../../../utils/queries";
import LoopFileName from "../../components/Target/LoopFileName";
import studioImage from "../../../public/assets/images/music-studio.png";
import Image from "next/image";
import LoadingWhiteText from "../../components/Loading/LoadingFullScreen";
import Login from "../login";
import Error from "../../components/Error/Error";
import TargetCard from "../../components/Target/TargetCard";
import LoopParamsTarget from "../../components/LoopCard/LoopParamsTarget";
import { formattedToday } from "../../../utils/dates";
const TargetDetails = ({ queryID }) => {
  const [loopNameParams, setLoopNameParams] = useState({
    tempo: queryID.params[3],
    key: "",
    producer: "",
    chordsLiteral: "",
    chordsNumerals: "",
    randomWord: randomWord,
  });
  const [loopName, setLoopName] = useState("");
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const genreId = queryID.params[0];
  const progressionId = queryID.params[1];
  const keyId = queryID.params[2];
  const tempo = queryID.params[3];
  const [includeDate, setIncludeDate] = useState(false);
  const [includeParams, setIncludeParams] = useState(true);

  const {
    data: progressionData,
    loading: progressionLoading,
    error: progressionError,
  } = useQuery(PROGRESSION_BY_ID, {
    variables: { progressionId: progressionId },
  });

  const {
    data: keyData,
    loading: keyLoading,
    error: keyError,
  } = useQuery(KEY_BY_ID, {
    variables: { keyId: keyId },
  });

  const { loading: meLoading, data: meData, error: meError } = useQuery(ME);

  useEffect(() => {
    if (
      progressionData === undefined ||
      progressionData.progressions === null ||
      keyData === undefined ||
      keyData.keys === null ||
      meData === undefined ||
      meData.me === null ||
      meData.me === undefined
    ) {
      return;
    }
    const keyName = keyData.key.key;
    const me = meData.me.instagramHandle;

    const progressionKey = progressionData.progression.all_keys.filter(
      (progression) => progression.key === keyName
    );
    const chordsLiteral = progressionKey[0].progression_in_key;
    const chordsNumerals = progressionData.progression.numerals;
    setLoopNameParams({
      ...loopNameParams,
      chordsNumerals: chordsNumerals,
      chordsLiteral: chordsLiteral,
      key: `${keyData.key.key.toLowerCase()} ${
        keyData.key.is_major ? "major" : "minor"
      }`,
      producer: me,
    });
  }, [progressionData, keyData, meData]);

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
    <div className=" relative bg-cover min-h-screen  flex flex-col items-center justify-start  py-12">
      <Image
        alt="a music studio background"
        className="absolute top-0 w-full h-full object-cover"
        src={studioImage}
        priority
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

export default TargetDetails;
export const getServerSideProps = async ({ query }) => {
  const queryID = query;

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PROGRESSION_BY_ID,
    variables: { progressionId: queryID.params[0] },
  });

  await apolloClient.query({
    query: KEY_BY_ID,
    variables: { keyId: queryID.params[2] },
  });

  return {
    props: { initializeApolloState: apolloClient.cache.extract(), queryID },
  };
};

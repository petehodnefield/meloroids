import { useQuery } from "@apollo/client";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../_app";
import { initializeApollo } from "../../../lib/apollo";
import { randomWord } from "../../../utils/data/words";
import { PROGRESSION_BY_ID, KEY_BY_ID, ME } from "../../../utils/queries";
import LoopFileName from "../../components/Target/LoopFileName";
import Link from "next/link";
import { Icon } from "@iconify/react";
import studioImage from "../../../public/assets/images/music-studio.png";
import Image from "next/image";
import Loading from "../../components/Loading/LoadingWhiteText";
import Error from "../../components/Error/Error";

const TargetDetails = ({ queryID }) => {
  const [loopName, setLoopName] = useState(randomWord);
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  console.log(loggedIn);
  const genreId = queryID.params[0];
  const progressionId = queryID.params[1];
  const keyId = queryID.params[2];
  const tempo = queryID.params[3];

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
  if (keyLoading || progressionLoading) return <Loading />;
  if (keyError || progressionError) return <Error />;
  const keyName = keyData.key.key;

  const progressionKey = progressionData.progression.all_keys.filter(
    (progression) => progression.key === keyName
  );
  const chordsLiteral = progressionKey[0].progression_in_key;
  const chordsNumerals = progressionData.progression.numerals;

  const loopFileName = loopName
    .concat(" ")
    .concat(tempo + " bpm ")
    .concat(keyName.toLowerCase())
    .concat(keyData.key.is_major ? ` major ` : ` minor `)
    .concat("@mongamonga_");

  return (
    <div className=" relative bg-cover min-h-screen  flex items-start justify-center">
      <Image
        alt="a music studio background"
        className="absolute w-full h-full"
        src={studioImage}
      />
      <div className="flex flex-col items-center w-full md:py-12  lg:max-w-48 lg:justify-between">
        {/* White bg for content */}
        <div className="relative w-full flex flex-col items-center pt-10  bg-white md:max-w-26 md:rounded-4xl md:mb-6">
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
              <p className="text-2 font-semibold">{chordsLiteral}</p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">
                🎼 Chords (numerals):
              </h3>
              <p className="text-2 font-semibold">{chordsNumerals}</p>
            </div>

            <div className="flex flex-col items-center mb-4">
              <h3 className="text-1 font-semibold text-medium">🔑 Key:</h3>
              <p className="text-2 font-semibold">
                {keyName} {keyData.key.is_major ? `Major` : `Minor`}
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

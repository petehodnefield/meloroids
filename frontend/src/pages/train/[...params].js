import { useQuery } from "@apollo/client";
import React from "react";
import { initializeApollo } from "../../../lib/apollo";
import { PROGRESSION_BY_ID, KEY_BY_ID } from "../../../utils/queries";
import LoopFileName from "../../components/Train/LoopFileName";

const TrainDetails = ({ queryID }) => {
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
  if (keyLoading || progressionLoading) return <div> Loading...</div>;

  const keyName = keyData.key.key;

  const progressionKey = progressionData.progression.all_keys.filter(
    (progression) => progression.key === keyName
  );
  const chordsLiteral = progressionKey[0].progression_in_key;
  const chordsNumerals = progressionData.progression.numerals;

  const loopName = "Rocket " .concat(tempo +  'bpm ').concat(keyName).concat( keyData.key.is_major ? `Major ` : `Minor `).concat('@mongamonga_')

  return (
    <div
      className="bg-cover min-h-screen  flex items-start justify-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)`,
      }}
    >
      <div className="flex flex-col items-center w-full md:py-12 lg:flex-row lg:max-w-48 lg:justify-between">
        {/* White bg for content */}
        <div className="w-full flex flex-col items-center pt-10  bg-white md:max-w-26 md:rounded-lg md:mb-6">
          {/* Loop Title */}
          <h2 className="text-2.5 text-primary font-semibold mb-8">"Rocket"</h2>
          {/* Data wrapper */}
          <div className="pb-6">
          <div className='flex flex-col items-center mb-4'>
        <h3 className='text-1 font-semibold text-medium'>🎼 Chords (literal):</h3>
        <p className='text-2 font-semibold'>{chordsLiteral}</p>
      </div>
      <div className='flex flex-col items-center mb-4'>
        <h3 className='text-1 font-semibold text-medium'>🎼 Chords (numerals):</h3>
        <p className='text-2 font-semibold'>{chordsNumerals}</p>
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
        </div>
        <LoopFileName
        loopName={loopName}
        ></LoopFileName>
      </div>
    </div>
  );
};

export default TrainDetails;
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

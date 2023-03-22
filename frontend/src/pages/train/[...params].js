import { useQuery } from "@apollo/client";
import React from "react";
import { initializeApollo } from "../../../lib/apollo";
import { PROGRESSION_BY_ID, KEY_BY_ID } from "../../../utils/queries";
import ProgressionQuery from "../../components/Train/ProgressionQuery";
const TrainDetails = ({ queryID }) => {
  const genreId = queryID.params[0];
  const progressionId = queryID.params[1];
  const keyId = queryID.params[2];
  const tempo = queryID.params[3];

  console.log(progressionId);

  const {
    data: keyData,
    loading: keyLoading,
    error: keyError,
  } = useQuery(KEY_BY_ID, {
    variables: { keyId: keyId },
  });

  if (keyLoading) return <div> Loading...</div>;

  const keyName = keyData.key.key;

  return (
    <div>
     
      <ProgressionQuery
        keyName={keyName}
        progressionId={progressionId}
      ></ProgressionQuery>
      <p>
        Key: {keyName} {keyData.key.is_major ? `Major` : `Minor`}
      </p>
      <p>tempo: {tempo} BPM</p>
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

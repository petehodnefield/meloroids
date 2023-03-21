import { useQuery } from "@apollo/client";
import React from "react";
import { initializeApollo } from "../../../lib/apollo";
import { PROGRESSION_BY_ID } from "../../../utils/queries";

const TrainDetails = ({ queryID }) => {
  const genreId = queryID.params[0];

  const progressionId = queryID.params[1];
  const keyId = queryID.params[2];
  const tempo = queryID.params[3];

  const {
    data: progressionData,
    loading,
    error,
  } = useQuery(PROGRESSION_BY_ID, {
    variables: { progressionId: progressionId },
  });
  if (loading) return <div> Loading...</div>;

  console.log(progressionData.progression);

  const progressionKey = progressionData.progression.all_keys.filter(
    (progression) => progression.key === "A"
  );
  console.log(progressionKey[0].progression_in_key);
  return (
    <div>
      <p>genreId: {genreId}</p>
      <p>progressionId: {progressionId}</p>
      <p>keyId: {keyId}</p>
      <p>tempo: {tempo}</p>
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
  return {
    props: { initializeApolloState: apolloClient.cache.extract(), queryID },
  };
};

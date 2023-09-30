import React from "react";
import { initializeApollo } from "../../../lib/apollo";
import { USER } from "../../../utils/queries";
import Auth from "../../../utils/auth";
const ResetPasswordParams = ({ queryID }) => {
  console.log(`query ${JSON.stringify(queryID.params[1])}`);
  const token = queryID.params[1];
  console.log(`token ${token}`);
  const validToken = Auth.isTokenExpired(token);

  console.log(`validToken ${validToken}`);
  // console.log(`queryID ${queryID.params[0]}`);
  return <div>ResetPasswordParams</div>;
};

export default ResetPasswordParams;

export const getServerSideProps = async ({ query }) => {
  const queryID = query;

  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: USER,
    variables: { userId: queryID.params[0] },
  });

  return {
    props: {
      data,
      initializeApolloState: apolloClient.cache.extract(),
      queryID,
    },
  };
};

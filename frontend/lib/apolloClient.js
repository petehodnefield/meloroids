import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: "https://meloroids-api-new.onrender.com/graphql",
    // uri: "http://localhost:4000/",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    artists: () => artist,
  },
};

import Artist from "../models/Artist.js";
// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    artists: async () => {
      return await Artist.find();
    },
  },
  Mutation: {
    createArtist: async (parent, args) => {
      return await Artist.create(args);
    },
  },
};

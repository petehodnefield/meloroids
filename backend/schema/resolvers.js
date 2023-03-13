import Artist from "../models/Artist.js";
// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    artists: async () => {
      return await Artist.find();
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name });
    },
  },
  Mutation: {
    createArtist: async (parent, args) => {
      await Artist.deleteMany();
      return await Artist.create(args);
    },
  },
};

import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    // Artists
    artists: async () => {
      return await Artist.find();
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name });
    },

    // Albums
    albums: async () => {
      return await Album.find();
    },
  },
  Mutation: {
    // Artists
    createArtist: async (parent, args) => {
      await Artist.deleteMany();
      return await Artist.create(args);
    },
    updateArtist: async (parent, args) => {
      return await Artist.findOneAndUpdate(
        { _id: args._id },
        { name: args.name }
      );
    },
    deleteArtist: async (parent, args) => {
      return await Artist.findOneAndDelete({ _id: args._id });
    },
    // Albums
    createAlbum: async (parent, args) => {
      await Album.deleteMany();
      return await Album.create(args);
    },
  },
};

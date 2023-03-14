import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import Song from "../models/Song.js";
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
      return await Album.find().populate("songs");
    },
    album: async (parent, { album_name }) => {
      return Album.findOne({ album_name }).populate("songs");
    },

    // Songs
    songs: async () => {
      return await Song.find();
    },
    song: async (parent, { song_name }) => {
      return Song.findOne({ song_name });
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
    updateAlbum: async (parent, args) => {
      return await Album.findOneAndUpdate(
        { _id: args._id },
        { $push: { songs: args.song_id } }
      );
    },
    deleteAlbum: async (parent, args) => {
      return await Album.findOneAndDelete({ _id: args._id });
    },

    // Songs
    createSong: async (parent, args) => {
      await Song.deleteMany();
      return await Song.create(args);
    },
    updateSong: async (parent, args) => {
      return await Song.findOneAndUpdate(
        { _id: args._id },
        { song_name: args.song_name }
      );
    },
    deleteSong: async (parent, args) => {
      return await Song.findOneAndDelete({ _id: args._id });
    },
  },
};

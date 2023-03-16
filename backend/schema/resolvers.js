import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Key from "../models/Key.js";
import Progression from "../models/Progression.js";
import Song from "../models/Song.js";
import { keysData } from "../data/keys.js";
// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    // Artists
    artists: async () => {
      return await Artist.find().populate("albums").populate("songs");
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name }).populate("albums").populate("songs");
    },

    // Albums
    albums: async () => {
      return await Album.find().populate("songs").populate("artist");
    },
    album: async (parent, { album_name }) => {
      return Album.findOne({ album_name }).populate("songs").populate("artist");
    },

    // Songs
    songs: async () => {
      return await Song.find()
        .populate("progression")
        .populate("album")
        .populate("key");
    },
    song: async (parent, { song_name }) => {
      return Song.findOne({ song_name })
        .populate("progression")
        .populate("album")
        .populate("key");
    },

    // Progressions
    progressions: async () => {
      return await Progression.find().populate("all_keys");
    },
    progression: async (parent, { numerals }) => {
      return Progression.findOne({ numerals }).populate("all_keys");
    },

    // Genre
    genres: async () => {
      return await Genre.find().populate("progressions");
    },
    genre: async (parent, { genre }) => {
      return Genre.findOne({ genre }).populate("progressions");
    },

    // Key
    keys: async () => {
      return await Key.find();
    },
    key: async (parent, { key }) => {
      return Key.findOne({ key });
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
    addAlbumToArtist: async (parent, args) => {
      const updatedArtist = await Artist.findOneAndUpdate(
        { _id: args._id },
        { $push: { albums: args.album_id } }
      );
      const updatedAlbum = await Album.findOneAndUpdate(
        { _id: args.album_id },
        { $push: { artist: args._id } }
      );
      return updatedArtist;
    },
    addSongToArtist: async (parent, args) => {
      const updatedArtist = await Artist.findOneAndUpdate(
        { _id: args._id },
        { $push: { songs: args.song_id } }
      );

      return updatedArtist;
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
      const createSong = await Song.create(args);
      const addProgression = await Song.findOneAndUpdate(
        { _id: createSong._id },
        { $push: { progression: args.progression_id } },
        { new: true }
      );
      return addProgression;
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

    // Progressions
    createProgression: async (parent, args) => {
      await Progression.deleteMany();
      return await Progression.create(args);
    },
    updateProgression: async (parent, args) => {
      return await Progression.findOneAndUpdate(
        { _id: args._id },
        { numerals: args.numerals, is_major: args.is_major }
      );
    },
    deleteProgression: async (parent, args) => {
      return await Progression.findOneAndDelete({ _id: args._id });
    },
    createAllKey: async (
      parent,
      { progression_id, progression_in_key, key, midi_file }
    ) => {
      const updatedProgression = await Progression.findOneAndUpdate(
        { _id: progression_id },
        { $push: { all_keys: { progression_in_key, key, midi_file } } },
        { new: true }
      );
      return updatedProgression;
    },

    // Genres
    createGenre: async (parent, args) => {
      await Genre.deleteMany();
      return await Genre.create(args);
    },
    updateGenre: async (parent, args) => {
      return await Genre.findOneAndUpdate(
        { _id: args._id },
        { $push: { progressions: args.progression_id } }
      );
    },
    deleteGenre: async (parent, args) => {
      return await Genre.findOneAndDelete({ _id: args._id });
    },

    // Key
    createKey: async (parent, args) => {
      await Key.deleteMany();
      const addKeys = await Key.insertMany(keysData);
      return addKeys;
    },
    updateKey: async (parent, args) => {
      return await Key.findOneAndUpdate(
        { _id: args._id },
        { is_major: args.is_major, key: args.key }
      );
    },
    deleteKey: async (parent, args) => {
      return await Key.findOneAndDelete({ _id: args._id });
    },
  },
};

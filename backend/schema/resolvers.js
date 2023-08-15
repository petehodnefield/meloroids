import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Key from "../models/Key.js";
import Progression from "../models/Progression.js";
import Song from "../models/Song.js";
import User from "../models/User.js";
import { returnMajorKey } from "../text.js";
import auth from "../utils/auth.js";
import { GraphQLError } from "graphql";
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
    artistallsongs: async (parent, { name }) => {
      return Artist.findOne({ name }).populate("songs");
    },

    // Albums
    albums: async () => {
      return await Album.find().populate("songs").populate("artist");
    },
    album: async (parent, { id }) => {
      return Album.findOne({ _id: id })
        .populate({
          path: "songs",
          populate: { path: "key", model: "Key" },
        })
        .populate({
          path: "songs",
          populate: { path: "progression", model: "Progression" },
        })
        .populate("artist");
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
      return await Progression.find();
    },
    progression: async (parent, args) => {
      const progression = await Progression.findOne({
        _id: args.id,
      });

      return progression;
    },

    // Genre
    genres: async () => {
      return await Genre.find().populate("progressions");
    },
    genre: async (parent, { id }) => {
      return Genre.findOne({ _id: id }).populate("progressions");
    },
    genreprogressions: async (parent, { id }) => {
      return Genre.findOne({ _id: id }).populate("progressions");
    },

    // Key
    keys: async () => {
      return await Key.find();
    },
    key: async (parent, { id }) => {
      return Key.findOne({ _id: id });
    },
    majorkeys: async () => {
      return Key.find({
        is_major: true,
      });
    },
    minorkeys: async () => {
      return Key.find({
        is_major: false,
      });
    },

    // Users
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
    },
    users: async () => {
      return await User.find();
    },
    user: async (parent, { id }) => {
      return await User.findOne({ _id: id });
    },
    username: async (parent, { username }) => {
      return await User.findOne({ username: username });
    },
    userEmail: async (parent, { email }) => {
      return await User.findOne({ email: email });
    },
  },
  Mutation: {
    // Artists
    createArtist: async (parent, args) => {
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
      const newAlbum = await Album.create(args);
      const updateArtist = await Artist.findOneAndUpdate(
        {
          _id: args.artist_id,
        },
        {
          $push: { albums: newAlbum._id },
        },
        { new: true }
      );
      return newAlbum;
    },
    updateAlbum: async (parent, args) => {
      const updatedAlbum = await Album.findOneAndUpdate(
        { _id: args._id },
        { $push: { songs: args.song_id } }
      );
      const updatedSong = await Song.findOneAndUpdate(
        { _id: args.song_id },
        { $push: { album: args._id } }
      );
      return updatedAlbum;
    },
    deleteAlbum: async (parent, args) => {
      return await Album.findOneAndDelete({ _id: args._id });
    },

    // Songs
    createSong: async (parent, args) => {
      const createSong = await Song.create(args);

      const addProgression = await Song.findOneAndUpdate(
        { _id: createSong._id },
        { $push: { progression: args.progression_id, key: args.key_id } },
        { new: true }
      );

      const updateAlbum = await Album.findOneAndUpdate(
        { _id: args.album_id },
        { $push: { songs: createSong } },
        { new: true }
      );
      return createSong;
    },
    updateSong: async (parent, args) => {
      const updatedSong = await Song.findOneAndUpdate(
        { _id: args._id },
        {
          song_name: args.song_name,
          tempo: args.tempo,
        },
        {
          new: true,
        }
      );
      return updatedSong;
    },
    deleteSong: async (parent, args) => {
      return await Song.findOneAndDelete({ _id: args._id });
    },

    // Progressions
    createProgression: async (parent, args) => {
      let numeralsToNumbers = [];
      const splitNumerals = args.numerals.split(" ");
      const getChordIndexes = await splitNumerals.forEach((numeral) => {
        // Check to see if it's a major key or a minor key
        if (args.is_major) {
          switch (numeral) {
            case "I":
              numeralsToNumbers.push(1);
              break;
            case "ii":
              numeralsToNumbers.push(2);
              break;
            case "iii":
              numeralsToNumbers.push(3);
              break;
            case "IV":
              numeralsToNumbers.push(4);
              break;
            case "V":
              numeralsToNumbers.push(5);
              break;
            case "vi":
              numeralsToNumbers.push(6);
              break;
            case "vii":
              numeralsToNumbers.push(7);
              break;
            default:
              console.log(false);
          }
        } else {
          switch (numeral) {
            case "i":
              numeralsToNumbers.push(1);
              break;
            case "ii":
              numeralsToNumbers.push(2);
              break;
            case "bVII":
              numeralsToNumbers.push(3);
              break;
            case "iv":
              numeralsToNumbers.push(4);
              break;
            case "v":
              numeralsToNumbers.push(5);
              break;
            case "bVI":
              numeralsToNumbers.push(6);
              break;
            case "bVII":
              numeralsToNumbers.push(7);
              break;
            default:
              console.log(false);
          }
        }
      });
      returnMajorKey("A", numeralsToNumbers);
      // return await Progression.create(args);
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
      // const addKeys = await Key.insertMany(keysData);
      // return addKeys;
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

    // Users
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = auth.signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new GraphQLError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect credentials");
      }

      const token = auth.signToken(user);
      return { token, user };
    },
    changeUserPassword: async (parent, { password }, context) => {
      if (context.user) {
        console.log(context.user);
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { password: password },
          { new: true }
        );
        return updateUser;
      }
      throw new GraphQLError("You need to be logged in!");
    },
    changeUserInfo: async (parent, args, context) => {
      if (context.user) {
        const changeUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            username: args.username,
            bio: args.bio,
            instagramHandle: args.instagramHandle,
          }
        );
        return changeUser;
      }
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const deleteUser = await User.findOneAndDelete({
          _id: context.user._id,
        });
        return deleteUser;
      }
    },
  },
};

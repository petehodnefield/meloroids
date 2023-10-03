import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Key from "../models/Key.js";
import Progression from "../models/Progression.js";
import Song from "../models/Song.js";
import User from "../models/User.js";
import { returnKey } from "../utils/chord-algorithm/return-key.js";
import { generateProgressionsInAllKeys } from "../utils/chord-algorithm/generate-chords.js";
import auth from "../utils/auth.js";
import { GraphQLError } from "graphql";
import * as dotenv from "dotenv";
dotenv.config();

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    // Artists
    artists: async () => {
      return await Artist.find()
        .populate("albums")
        .populate({
          path: "songs",
          populate: { path: "album", model: "Album" },
        });
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name })
        .populate("albums")
        .populate({
          path: "songs",
          populate: { path: "album", model: "Album" },
        });
    },
    artistallsongs: async (parent, { name }) => {
      return Artist.findOne({ name }).populate({
        path: "songs",
        populate: { path: "album", model: "Album" },
      });
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
        .populate({
          path: "songs",
          populate: { path: "genre", model: "Genre" },
        })
        .populate("artist");
    },

    // Songs
    songs: async () => {
      return await Song.find()
        .populate("progression")
        .populate("album")
        .populate("key")
        .populate("genre")
        .populate("artist");
    },
    song: async (parent, { song_name }) => {
      return Song.findOne({ song_name })
        .populate("progression")
        .populate("album")
        .populate("key")
        .populate("genre")
        .populate("artist");
    },

    // Progressions
    progressions: async () => {
      return await Progression.find().populate("songs");
    },
    progression: async (parent, args) => {
      const progression = await Progression.findOne({
        _id: args.id,
      }).populate("songs");

      return progression;
    },
    progressionByNumerals: async (parent, args) => {
      const progression = await Progression.findOne({
        numerals: args.numerals,
      }).populate("songs");

      return progression;
    },

    // Genre
    genres: async () => {
      return await Genre.find()
        .populate("progressions")
        .populate({
          path: "songs",
          populate: { path: "album", model: "Album" },
          populate: { path: "progression", model: "Progression" },
        });
    },
    genre: async (parent, { id }) => {
      return Genre.findOne({ _id: id })
        .populate("progressions")
        .populate({
          path: "songs",
          populate: { path: "album", model: "Album" },
          populate: { path: "progression", model: "Progression" },
        });
    },
    genreprogressions: async (parent, { id }) => {
      return Genre.findOne({ _id: id }).populate("progressions");
    },
    genrefilteredprogressions: async (parent, args) => {
      return Progression.find({ _id: { $nin: args.progressionId } });
    },

    // Key
    keys: async () => {
      return await Key.find().populate("songs");
    },
    key: async (parent, { id }) => {
      return Key.findOne({ _id: id }).populate("songs");
    },
    majorkeys: async () => {
      return Key.find({
        is_major: true,
      }).populate("songs");
    },
    minorkeys: async () => {
      return Key.find({
        is_major: false,
      }).populate("songs");
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
    verifyToken: async (parent, { user_id, token }, context) => {
      const user = await User.findOne({ _id: user_id });

      const verify = await auth.verifyToken(token);

      if (!verify) {
        throw new GraphQLError("This is an invalid token!");
      } else return { token, user };
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
    createArtist: async (parent, args, context) => {
      // if (context.user) {
      return await Artist.create(args);
      // } else {
      //   throw new GraphQLError(
      //     "You do not have permission to perform this request!"
      //   );
      // }
    },
    updateArtist: async (parent, args, context) => {
      return await Artist.findOneAndUpdate(
        { _id: args._id },
        { name: args.name, image: args.image }
      );
    },
    deleteArtist: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Artist.findOneAndDelete({ _id: args._id });
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    addAlbumToArtist: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        const updatedArtist = await Artist.findOneAndUpdate(
          { _id: args._id },
          { $push: { albums: args.album_id } }
        );
        const updatedAlbum = await Album.findOneAndUpdate(
          { _id: args.album_id },
          { $push: { artist: args._id } }
        );
        return updatedArtist;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    addSongToArtist: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        const updatedArtist = await Artist.findOneAndUpdate(
          { _id: args._id },
          { $push: { songs: args.song_id } }
        );

        return updatedArtist;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },

    // Albums
    createAlbum: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
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
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    updateAlbumInfo: async (parent, args, context) => {
      const updatedAlbumInfo = await Album.findOneAndUpdate(
        { _id: args._id },
        {
          artwork: args.artwork,
          year: args.year,
        }
      );
      return updatedAlbumInfo;
    },
    updateAlbumSongs: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        const updatedAlbum = await Album.findOneAndUpdate(
          { _id: args._id },
          { $push: { songs: args.song_id } }
        );
        const updatedSong = await Song.findOneAndUpdate(
          { _id: args.song_id },
          { $push: { album: args._id } }
        );
        return updatedAlbum;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    deleteAlbum: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Album.findOneAndDelete({ _id: args._id });
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },

    // Songs
    createSong: async (parent, args, context) => {
      // if (context.user && context.user.role === "admin") {
      const createSong = await Song.create(args);

      const addProgression = await Song.findOneAndUpdate(
        { _id: createSong._id },
        {
          $push: {
            progression: args.progression_id,
            key: args.key_id,
            genre: args.genre_id,
            album: args.album_id,
            artist: args.artist_id,
          },
        },
        { new: true }
      )
        .populate("album")
        .populate("artist");

      const updateGenre = await Genre.findOneAndUpdate(
        {
          _id: args.genre_id,
        },
        { $push: { songs: createSong } },
        { new: true }
      );
      const updateKey = await Key.findOneAndUpdate(
        {
          _id: args.key_id,
        },
        { $push: { songs: createSong } },
        { new: true }
      );

      const updateProgression = await Progression.findOneAndUpdate(
        {
          _id: args.progression_id,
        },
        { $push: { songs: createSong } },
        { new: true }
      );

      const updateAlbum = await Album.findOneAndUpdate(
        { _id: args.album_id },
        { $push: { songs: createSong } },
        { new: true }
      );

      const updateArtist = await Artist.findOneAndUpdate(
        {
          _id: args.artist_id,
        },
        { $push: { songs: createSong } },
        { new: true }
      );
      return addProgression;
      // } else {
      //   throw new GraphQLError(
      //     "You do not have permission to perform this request!"
      //   );
      // }
    },
    pushArtistToSong: async (parent, args, context) => {
      // Reset relationships
      // const resetArtistSongs = await Artist.findOneAndUpdate(
      //   { _id: args.artist_id },
      //   {
      //     $set: { songs: [] },
      //   }
      // ).populate("songs");
      // const resetSongArtist = await Song.findOneAndUpdate(
      //   { _id: args.song_id },
      //   {
      //     $set: { artist: [] },
      //   }
      // ).populate("artist");
      // return resetArtistSongs, resetSongArtist;

      const artist = await Artist.findOne({ _id: args.artist_id });
      const updateSong = await Song.findOneAndUpdate(
        { _id: args.song_id },
        {
          $push: { artist: artist },
        },
        { new: true }
      ).populate("artist");
      const updateArtist = await Artist.findOneAndUpdate(
        { _id: args.artist_id },
        {
          $push: { songs: updateSong },
        },
        { new: true }
      ).populate("songs");
      return `${updateSong}, ${updateArtist}`;
    },
    updateSong: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        const removeOldData = await Song.findOneAndUpdate(
          { _id: args.song_id },
          {
            song_name: args.song_name,
            tempo: args.tempo,
            $pull: {
              progression: args.old_progression_id,
              key: args.old_key_id,
            },
          },
          {
            new: true,
          }
        );

        const addNewData = await Song.findOneAndUpdate(
          { _id: removeOldData._id },
          {
            $push: {
              progression: args.new_progression_id,
              key: args.new_key_id,
              genre: args.genre_id,
              album: args.album_id,
            },
          },
          {
            new: true,
          }
        );
        const updateGenre = await Genre.findOneAndUpdate(
          {
            _id: args.genre_id,
          },
          { $push: { songs: addNewData } },
          { new: true }
        );
        const updateKey = await Key.findOneAndUpdate(
          {
            _id: args.new_key_id,
          },
          { $push: { songs: addNewData } },
          { new: true }
        );

        const updateProgression = await Progression.findOneAndUpdate(
          {
            _id: args.new_progression_id,
          },
          { $push: { songs: addNewData } },
          { new: true }
        );

        return addNewData;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    deleteSong: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Song.findOneAndDelete({ _id: args._id });
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },

    // Progressions
    createProgression: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        async function createProgression(data) {
          let allKeys = [];
          const loopThroughKeys = await data.forEach((key) => {
            // console.log("key", key);
            allKeys.push({
              key: key.key,
              progression_in_key: key.numerals.join(" "),
            });
          });
          return await Progression.create({
            is_major: args.is_major,
            numerals: args.numerals,
            all_keys: allKeys,
          });
        }
        const data = await generateProgressionsInAllKeys(args);

        const createNewProgression = await createProgression(data[0]);

        return createNewProgression;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    updateProgression: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        let allKeys = [];

        async function updateAllKeysData(data) {
          const loopThroughKeys = await data.forEach((key) => {
            allKeys.push({
              key: key.key,
              progression_in_key: key.numerals.join(" "),
            });
          });
        }
        const data = await generateProgressionsInAllKeys(args);

        const updateAllKeys = await updateAllKeysData(data[0]);

        const removeOldAllKeys = await Progression.findOneAndUpdate(
          { _id: args._id },
          {
            numerals: args.numerals,
            is_major: args.is_major,
            $set: { all_keys: [] },
          }
        );
        const updateWithNewAllKeys = await Progression.findByIdAndUpdate(
          {
            _id: args._id,
          },
          {
            $push: { all_keys: allKeys },
          },
          {
            new: true,
          }
        );
        return updateWithNewAllKeys;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    deleteProgression: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Progression.findOneAndDelete({ _id: args._id });
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    createAllKey: async (
      parent,
      { progression_id, progression_in_key, key, midi_file },
      context
    ) => {
      if (context.user && context.user.role === "admin") {
        const updatedProgression = await Progression.findOneAndUpdate(
          { _id: progression_id },
          { $push: { all_keys: { progression_in_key, key, midi_file } } },
          { new: true }
        );
        return updatedProgression;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },

    // Genres
    createGenre: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Genre.create(args);
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    updateGenre: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Genre.findOneAndUpdate(
          { _id: args._id },
          { $push: { progressions: args.progression_id } },
          { new: true }
        );
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    removeProgressionFromGenre: async (
      parent,
      { _id, progression_id },
      context
    ) => {
      if (context.user && context.user.role === "admin") {
        return Genre.findOneAndUpdate(
          { _id: _id },
          { $pull: { progressions: progression_id } }
        ).populate("progressions");
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    deleteGenre: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Genre.findOneAndDelete({ _id: args._id });
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },

    // Key
    createKey: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        // const addKeys = await Key.insertMany(keysData);
        // return addKeys;
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    updateKey: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Key.findOneAndUpdate(
          { _id: args._id },
          { is_major: args.is_major, key: args.key }
        );
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
    },
    deleteKey: async (parent, args, context) => {
      if (context.user && context.user.role === "admin") {
        return await Key.findOneAndDelete({ _id: args._id });
      } else {
        throw new GraphQLError(
          "You do not have permission to perform this request!"
        );
      }
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
        throw new GraphQLError(
          "Username and/or password is incorrect. Please try again."
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError(
          "Username and/or password is incorrect. Please try again."
        );
      }

      const token = auth.signToken(user);
      return { token, user };
    },
    changeUserPassword: async (
      parent,
      { currentPassword, newPassword },
      context
    ) => {
      // console.log(`context ${context.user._id}`);
      if (context.user._id) {
        const user = await User.findOne({ _id: context.user._id });

        const correctPw = await user.isCorrectPassword(currentPassword);

        if (!correctPw) {
          throw new GraphQLError("Password is incorrect. Please try again.");
        } else {
          const updateUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { password: newPassword },
            { new: true }
          );
          return updateUser;
        }
      }

      throw new GraphQLError("You need to be logged in!");
    },
    resetPassword: async (parent, { newPassword, user_id }, context) => {
      const updateUser = await User.findOneAndUpdate(
        { _id: user_id },
        { password: newPassword },
        { new: true }
      );
      return updateUser;
    },

    generateResetToken: async (parent, { email }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("Email does not exist in our database.");
      }

      const token = await auth.signToken(user);

      const msg = {
        to: email,
        from: "mongamonga@meloroids.io",
        subject: "Reset Password Link",
        text: `Please click this link to reset your password. This link will expire in 15 minutes. DO NOT SHARE WITH ANYONE ELSE!
       ${process.env.SENDGRID_REDIRECT_LINK}/reset-password/${user._id}/${token}`,
        // text: `Please click this link to reset your password. Do not share with anybody else!`,
        // html: `<a href="http://localhost:3000/reset-password/${user._id}/${token}"></a>`,
      };
      await sgMail
        .send(msg)
        .then(() => {
          console.log("Email successfully sent");
        })
        .catch((error) => {
          console.error(error);
        });

      return { token, user };
    },

    changeUserInfo: async (parent, args, context) => {
      if (context.user) {
        const changeUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            username: args.username,
            bio: args.bio,
            instagramHandle: args.instagramHandle,
            email: args.email,
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

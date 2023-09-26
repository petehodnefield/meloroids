import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./schema/resolvers.js";
import { seedDB } from "./seeds/seeds.js";
import auth from "./utils/auth.js";
import { makeExecutableSchema } from "@graphql-tools/schema";

const db = await mongoose.connect(process.env.MONGO_DB_URI);
// const seed = await seedDB();
console.info("connected to db!");

let schema = makeExecutableSchema({
  typeDefs: [
    `#graphql
  type Artist {
    _id: ID
    name: String
    age: Int
    image: String
    albums: [Album]
    songs: [Song]
  }

  type Album {
    _id: ID,
    album_name: String,
    artwork: String,
    year: String,
    popularity: Int,
    songs: [Song]
    artist: [Artist]
  }

  type Song {
    _id: ID,
    song_name: String,
    tempo: Int,
    key: [Key],
    popularity: Int,
    progression: [Progression],
    album: [Album],
    genre: [Genre],
    artist: [Artist]
  }

  type AllKeys {
    _id: ID,
    key: String,
    progression_in_key: String,
    midi_file: String
  }

  input AllHelloKeys {
    _id: ID,
    key: String,
    progression_in_key: String,
    midi_file: String
  }

  type Progression {
    _id: ID,
    numerals: String,
    is_major: Boolean,
    all_keys: [AllKeys],
    songs: [Song]
  }

  type Genre {
    _id: ID!
    genre: String
    progressions: [Progression],
    songs: [Song]
  }

  type Key {
    _id: ID!,
    key: String!,
    is_major: Boolean!,
    songs: [Song]
  }

  type PremiumSchema {
    _id: ID!,
    accountType: String,
    isActive: Boolean,
    subscriptionStartDate: String,
    subscriptionEndDate: String,
  }

  type User {
    _id: ID!,
    username: String!,
    password: String!,
    email: String!,
    instagramHandle: String!,
    profilePicture: String,
    bio: String,
    role: String!,
    premiumAccount: [PremiumSchema]
  }

  type Query {
    artists: [Artist]
    artist(name: String!): Artist
    artistallsongs(name: String!): Artist

    albums: [Album]
    album(id: ID!): Album


    songs: [Song]
    song(song_name: String!): Song

    progressions: [Progression]
    progression(id: ID!): Progression
    progressionByNumerals(numerals: String!): Progression

    genres: [Genre]
    genre(id: ID!): Genre
    genreprogressions(id: ID!): Genre
    genrefilteredprogressions(progressionId: [ID!]): [Progression]

    keys: [Key]
    key(id: ID!): Key
    majorkeys: [Key]
    minorkeys: [Key]

    me: User
    users: [User]
    user(id: ID!): User
    username(username: String!): User
    userEmail(email: String!): User
  }

  type Mutation {
    createArtist(name: String!, age: Int, image: String!): Artist
    updateArtist(name: String, _id: ID!, image: String): Artist
    deleteArtist(_id: ID!): Artist

    createAlbum(album_name: String!, artwork: String!, year: String!, artist_id: ID!): Album
    updateAlbumInfo(_id: ID!, artwork: String, year: String): Album
    updateAlbumSongs(_id: ID!, song_id: ID!): Album
    deleteAlbum(_id: ID!): Album

    addAlbumToArtist(_id: ID!, album_id: ID!): Artist
    addSongToArtist(_id: ID!, song_id: ID!): Artist

    pushArtistToSong(song_id: ID!, artist_id: ID!): Song
    createSong(song_name: String!, tempo: Int!, progression_id: ID!, key_id: ID!, genre_id: ID!, album_id: ID!, artist_id: ID!): Song
    updateSong(song_id: ID!, song_name: String, tempo: Int, genre_id: ID!, album_id: ID!, old_progression_id: ID, new_progression_id: ID, old_key_id: ID, new_key_id: ID): Song
    deleteSong(_id: ID!): Song

    createProgression(numerals: String!, is_major: Boolean, all_keys: AllHelloKeys): Progression
    updateProgression(_id: ID!, numerals: String!, is_major: Boolean, all_keys: AllHelloKeys): Progression
    deleteProgression(_id: ID!): Progression

    createAllKey(progression_id: ID!, progression_in_key: String!, key: String!, midi_file: String): Progression

    createGenre(genre: String!): Genre
    updateGenre(_id: ID!, progression_id: ID): Genre
    removeProgressionFromGenre(_id: ID!, progression_id: ID!): Genre
    deleteGenre(_id: ID!): Genre

    createKey: Key
    updateKey(_id: ID!, is_major: Boolean, key: String): Key
    deleteKey(_id: ID!): Key

    createUser(username: String!, password: String!, role: String, email: String!, instagramHandle: String!): Auth 
    login(username: String!, password: String!): Auth 
    changeUserPassword(password: String!): User 
    changeUserInfo(username: String, bio: String, instagramHandle: String): User 
    deleteUser: User 
  }

  type Auth {
    token: ID!
    user: User
  }
`,
  ],
  resolvers,
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
  cache: "bounded",
  persistedQueries: false,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  context: auth.authMiddleware,
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Artist {
    _id: ID
    name: String
    age: Int
    image: String
  }

  type Album {
    _id: ID,
    album_name: String,
    artwork: String,
    year: String,
    popularity: Int,
    songs: [Song]
  }

  type Song {
    _id: ID,
    song_name: String,
    tempo: Int,
    popularity: Int,
    progression: [Progression]
  }
  type AllKeys {
    _id: ID,
    key: String,
    progression_in_key: String,
    midi_file: String
  }
  type Progression {
    _id: ID,
    numerals: String,
    tempo: Int,
    is_major: Boolean,
    all_keys: AllKeys
  }

  type Query {
    artists: [Artist]
    artist(name: String!): Artist

    albums: [Album]
    album(album_name: String!): Album


    songs: [Song]
    song(song_name: String!): Song

    progressions: [Progression]
    progression(numerals: String!): Progression

  }

  type Mutation {
    createArtist(name: String!, age: Int!, image: String!): Artist
    updateArtist(name: String!, _id: ID!): Artist
    deleteArtist(_id: ID!): Artist

    createAlbum(album_name: String!, artwork: String!, year: String!, popularity: String): Album
    updateAlbum(_id: ID!, song_id: ID!): Album
    deleteAlbum(_id: ID!): Album


    createSong(song_name: String!, tempo: Int!, popularity: Int): Song
    updateSong(_id: ID!, song_name: String!): Song
    deleteSong(_id: ID!): Song

    createProgression(numerals: String!, tempo: Int!, is_major: Boolean): Progression
    updateProgression(_id: ID!, numerals: String, is_major: Boolean): Progression
    deleteProgression(_id: ID!): Progression

  }
`;

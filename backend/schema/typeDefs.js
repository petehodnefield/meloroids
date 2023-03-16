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
    all_keys: [AllKeys]
  }

  type Genre {
    _id: ID!
    genre: String!
    progressions: [Progression]
  }

  type Key {
    _id: ID!,
    key: String!,
    is_major: Boolean!,
    midi_file: String
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

    genres: [Genre]
    genre(genre: String!): Genre

    keys: [Key]
    key(genre: String!): Key

  }

  type Mutation {
    createArtist(name: String!, age: Int!, image: String!): Artist
    updateArtist(name: String!, _id: ID!): Artist
    deleteArtist(_id: ID!): Artist

    createAlbum(album_name: String!, artwork: String!, year: String!, popularity: String): Album
    updateAlbum(_id: ID!, song_id: ID!): Album
    deleteAlbum(_id: ID!): Album

    addAlbumToArtist(_id: ID!, album_id: ID!): Artist


    createSong(song_name: String!, tempo: Int!, popularity: Int): Song
    updateSong(_id: ID!, song_name: String!): Song
    deleteSong(_id: ID!): Song

    createProgression(numerals: String!, tempo: Int!, is_major: Boolean): Progression
    updateProgression(_id: ID!, numerals: String, is_major: Boolean): Progression
    deleteProgression(_id: ID!): Progression

    createAllKey(progression_id: ID!, progression_in_key: String!, key: String!, midi_file: String): Progression

    createGenre(genre: String!): Genre
    updateGenre(_id: ID!, progression_id: ID!): Genre
    deleteGenre(_id: ID!): Genre

    createKey(key: String!, is_major: Boolean!, midi_file: String): Key
    updateKey(_id: ID!, is_major: Boolean, key: String): Key
    deleteKey(_id: ID!): Key

  }
`;

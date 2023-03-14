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
    popularity: Int
  }

  type Query {
    artists: [Artist]
    artist(name: String!): Artist

    albums: [Album]
  }

  type Mutation {
    createArtist(name: String!, age: Int!, image: String!): Artist
    updateArtist(name: String!, _id: ID!): Artist
    deleteArtist(_id: ID!): Artist

    createAlbum(album_name: String!, artwork: String!, year: String!, popularity: String): Album

  }
`;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Artist {
    _id: ID
    name: String
    age: String
    image: String
  }

  type Query {
    artists: [Artist]
    artist(name: String!): Artist
  }

  type Mutation {
    createArtist(name: String!, age: String!, image: String!): Artist
    updateArtist(name: String!, _id: ID!): Artist
    deleteArtist(_id: ID!): Artist
  }
`;

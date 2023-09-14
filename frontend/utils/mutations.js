import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        password
        email
        instagramHandle
        bio
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation(
    $username: String!
    $password: String!
    $email: String!
    $instagramHandle: String!
  ) {
    createUser(
      username: $username
      password: $password
      email: $email
      instagramHandle: $instagramHandle
    ) {
      token
      user {
        _id
        username
        password
        email
        instagramHandle
        bio
      }
    }
  }
`;

export const DELETE_ARTIST = gql`
  mutation Mutation($id: ID!) {
    deleteArtist(_id: $id) {
      _id
      name
      age
      image
    }
  }
`;

export const DELETE_PROGRESSION = gql`
  mutation Mutation($id: ID!) {
    deleteProgression(_id: $id) {
      _id
      numerals

      is_major
    }
  }
`;

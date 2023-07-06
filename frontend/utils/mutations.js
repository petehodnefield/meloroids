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

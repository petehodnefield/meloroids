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

export const CHANGE_USER_INFO = gql`
  mutation Mutation(
    $username: String
    $bio: String
    $instagramHandle: String
    $email: String
  ) {
    changeUserInfo(
      username: $username
      bio: $bio
      instagramHandle: $instagramHandle
      email: $email
    ) {
      _id
      username
      password
      email
      instagramHandle
      bio
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
export const UPDATE_PROGRESSION = gql`
  mutation UpdateProgression($id: ID!, $numerals: String!, $isMajor: Boolean) {
    updateProgression(_id: $id, numerals: $numerals, is_major: $isMajor) {
      _id
      numerals

      is_major
      all_keys {
        _id
        key
        progression_in_key
      }
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

export const PUSH_ARTIST_TO_SONG = gql`
  mutation Mutation($songId: ID!, $artistId: ID!) {
    pushArtistToSong(song_id: $songId, artist_id: $artistId) {
      _id
      song_name
      tempo
      artist {
        _id
        name
      }
    }
  }
`;

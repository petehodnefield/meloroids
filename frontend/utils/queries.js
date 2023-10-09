import { gql } from "@apollo/client";

export const ALL_GENRES = gql`
  query Query {
    genres {
      _id
      genre
      progressions {
        _id
        numerals
        is_major
      }
    }
  }
`;
export const PROGRESSION_BY_ID = gql`
  query Progression($progressionId: ID!) {
    progression(id: $progressionId) {
      _id
      numerals
      is_major
      all_keys {
        _id
        key
        progression_in_key
      }
      songs {
        _id
        song_name
      }
    }
  }
`;

export const PROGRESSION_BY_NUMERALS = gql`
  query ProgressionByNumerals($numerals: String!) {
    progressionByNumerals(numerals: $numerals) {
      _id
      numerals
      is_major
      songs {
        _id
        song_name
      }
    }
  }
`;

export const ALL_PROGRESSIONS = gql`
  query Query {
    progressions {
      _id
      numerals
      is_major
      all_keys {
        key
        progression_in_key
      }
    }
  }
`;
export const GENRES_PROGRESSIONS = gql`
  query Query($genreprogressionsId: ID!) {
    genreprogressions(id: $genreprogressionsId) {
      _id
      genre
      progressions {
        _id
        numerals
        is_major
      }
    }
  }
`;

export const GENRE_BY_ID = gql`
  query Genre($genreId: ID!) {
    genre(id: $genreId) {
      _id
      genre
      progressions {
        _id
        numerals
        is_major
      }
    }
  }
`;

export const KEY_BY_ID = gql`
  query Key($keyId: ID!) {
    key(id: $keyId) {
      _id
      key
      is_major
    }
  }
`;

export const ALL_KEYS = gql`
  query Query {
    keys {
      _id
      key
      is_major
    }
  }
`;

export const MINOR_KEYS = gql`
  query Minorkeys {
    minorkeys {
      _id
      key
      is_major
    }
  }
`;

export const MAJOR_KEYS = gql`
  query Majorkeys {
    majorkeys {
      _id
      key
      is_major
    }
  }
`;

export const ME = gql`
  query Query {
    me {
      _id
      username

      email
      instagramHandle
      bio
    }
  }
`;

export const USERNAME = gql`
  query Username($username: String!) {
    username(username: $username) {
      _id
      username
      password
      email
      instagramHandle
      bio
    }
  }
`;

export const USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      _id
      username
      password
      email
      instagramHandle
      bio
    }
  }
`;
export const USER_EMAIL = gql`
  query UserEmail($email: String!) {
    userEmail(email: $email) {
      _id
      username
      password
      email
      instagramHandle
      bio
    }
  }
`;

export const VERIFY_TOKEN = gql`
  query VerifyToken($token: String!, $userId: ID!) {
    verifyToken(token: $token, user_id: $userId) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ALL_ARTISTS = gql`
  query Query {
    artists {
      _id
      name
      image
      songs {
        _id
        song_name
      }
      albums {
        _id
        album_name
        artwork
      }
    }
  }
`;

export const ALBUM = gql`
  query Album($albumId: ID!) {
    album(id: $albumId) {
      _id
      album_name
      artwork
      year
      popularity
      songs {
        _id
        song_name
        tempo
        key {
          is_major
          key
          _id
        }
        genre {
          _id
          genre
        }
        progression {
          _id
          numerals
          is_major
          all_keys {
            _id
            key
            progression_in_key
            midi_file
          }
        }
      }
    }
  }
`;

export const ALL_ALBUMS = gql`
  query Query {
    albums {
      _id
      album_name
      artwork
      year
      popularity
      songs {
        _id
        song_name
        tempo
        progression {
          _id
          numerals
        }
        genre {
          _id
          genre
        }
      }
    }
  }
`;

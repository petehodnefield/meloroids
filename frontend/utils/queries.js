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
        midi_file
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

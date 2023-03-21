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

import React, { useState, useEffect } from "react";
import { initializeApollo } from "../../../lib/apollo";
import { ALBUM } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
const ArtistTargetData = ({ query }) => {
  const albumId = query.params[1];

  //   State will hold the params if the user wants to be in the same parameters as the actual song
  const [randomSongSameParams, setRandomSongSameParams] = useState({
    tempo: "",
    key: "",
    progressionNumerals: "",
    progressionLiteral: "",
  });
  //   console.log("Params", randomSongSameParams);
  //   This state holds if the user wants the key and tempo to switch from the song
  const [randomSongDifferentParams, setRandomSongDifferentParams] = useState({
    tempo: "",
    key: "",
    progressionNumerals: "",
    progressionLiteral: "",
  });
  const { loading, data, error } = useQuery(ALBUM, {
    variables: { albumId: albumId },
  });

  const randomlyChosenSong = async (data) => {
    // Find a song from the songs array
    const songsArray = await data.album.songs;
    const randomIndex = Math.floor(Math.random() * songsArray.length);
    const randomSong = await data.album.songs[randomIndex];
    const randomSongKeyLetter = await data.album.songs[randomIndex].key[0].key;
    const randomSongKey = await `${randomSongKeyLetter} ${
      randomSong.key[0].is_major ? "Major" : "Minor"
    }`;

    const { numerals } = await randomSong.progression[0];
    const { tempo } = await randomSong;

    const allKeys = await randomSong.progression[0].all_keys;

    const findProgressionLiteral = await allKeys.map((progression) => {
      console.log("progression", progression);
      //   if (progression.key === randomSongKeyLetter) {
      //     setRandomSongSameParams({
      //       ...randomSongSameParams,
      //       progressionLiteral: progression.progression_in_key,
      //       progressionNumerals: numerals,
      //       tempo: tempo,
      //       key: randomSongKey,
      //     });
      //   }
    });
  };

  useEffect(() => {
    if (!data || !data.album || data.album === null) {
      return;
    }
    randomlyChosenSong(data);
  }, [data]);
  return <div>ArtistTargetData</div>;
};

export default ArtistTargetData;

export const getServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALBUM,
    variables: { albumId: query.params[1] },
  });

  return {
    props: { initializeApolloState: apolloClient.cache.extract(), query },
  };
};

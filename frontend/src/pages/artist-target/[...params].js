import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../_app";
import { initializeApollo } from "../../../lib/apollo";
import { ALBUM, ME } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import studioImage from "../../../public/assets/images/music-studio.png";
import { randomWord } from "../../../utils/data/words";
import LoopFileName from "../../components/Target/LoopFileName";
import Image from "next/image";
import Login from "../login";
import ReferenceCard from "../../components/Header/ArtistTarget/ReferenceCard";
import { Icon } from "@iconify/react";
import LoopParamsArtistTarget from "../../components/LoopCard/LoopParamsArtistTarget";
const ArtistTargetData = ({ query }) => {
  const albumId = query.params[1];
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [loopNameParams, setLoopNameParam] = useState({
    key: "",
    tempo: "",
    producer: "",
    randomWord: randomWord,
  });
  const [loopName, setLoopName] = useState("");
  //   State will hold the params if the user wants to be in the same parameters as the actual song
  const [randomSongSameParams, setRandomSongSameParams] = useState({
    tempo: "",
    key: "",
    progressionNumerals: "",
    progressionLiteral: "",
  });
  const [referenceInfo, setReferenceInfo] = useState({
    referenceAlbumName: "",
    referenceAlbumArtwork: "",
    referenceSongName: "",
  });
  console.log("referenceInfo", referenceInfo);
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
  const { loading: meLoading, data: meData, error: meError } = useQuery(ME);
  const randomlyChosenSong = async (data) => {
    // Find a song from the songs array

    const songsArray = await data.album.songs;
    const randomIndex = Math.floor(Math.random() * songsArray.length);
    const randomSong = await data.album.songs[randomIndex];
    const randomSongKeyLetter = await data.album.songs[randomIndex].key[0].key;
    const randomSongKey = `${randomSongKeyLetter.toLowerCase()} ${
      randomSong.key[0].is_major ? "major" : "minor"
    }`;
    const { numerals } = await randomSong.progression[0];
    const { tempo } = await randomSong;

    const allKeys = await randomSong.progression[0].all_keys;
    setReferenceInfo({
      ...referenceInfo,
      referenceAlbumName: data.album.album_name,
      referenceAlbumArtwork: data.album.artwork,
      referenceSongName: randomSong.song_name,
    });
    const findProgressionLiteral = await allKeys.map((progression) => {
      if (progression.key === randomSongKeyLetter) {
        setRandomSongSameParams({
          ...randomSongSameParams,
          progressionLiteral: progression.progression_in_key,
          progressionNumerals: numerals,
          tempo: tempo,
          key: randomSongKey,
        });
      }
      setLoopNameParam({
        ...loopNameParams,
        tempo: tempo,
        key: randomSongKey,
      });
    });
  };

  useEffect(() => {
    if (meData === undefined || meData.me === null) {
      return;
    } else if (meData.me.username) {
      const me = meData.me.instagramHandle;
      setLoopNameParam({
        ...loopNameParams,
        producer: me,
      });
    }
  }, [meData]);
  useEffect(() => {
    if (!data || !data.album || data.album === null) {
      return;
    }
    randomlyChosenSong(data);
  }, [data]);

  useEffect(() => {
    setLoopName(
      `${loopNameParams.randomWord} ${loopNameParams.tempo} bpm ${loopNameParams.key} @${loopNameParams.producer}`
    );
  }, [loopNameParams]);

  const splitChords = randomSongSameParams.progressionLiteral.split(" ");
  const splitNumerals = randomSongSameParams.progressionNumerals.split(" ");
  if (!loggedIn) return <Login />;
  return (
    <div className=" relative bg-cover min-h-screen  flex flex-col items-center justify-start  ">
      <Image
        alt="a music studio background"
        className="absolute w-full h-full object-cover"
        src={studioImage}
      />{" "}
      <h1 className="relative mb-4 uppercase text-2 lg:text-3 font-semibold text-white text-center mt-10">
        Artist Target
      </h1>
      <LoopParamsArtistTarget
        referenceInfo={referenceInfo}
        splitChords={splitChords}
        splitNumerals={splitNumerals}
        songParams={randomSongSameParams}
        loopName={loopName}
      />
    </div>
  );
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

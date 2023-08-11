import React, { useState, useEffect } from "react";
import { initializeApollo } from "../../../lib/apollo";
import { ALBUM, ME } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import studioImage from "../../../public/assets/images/music-studio.png";
import { randomWord } from "../../../utils/data/words";
import LoopFileName from "../../components/Target/LoopFileName";
import Image from "next/image";
import Login from "../login";
import ReferenceCard from "../../components/Header/ArtistTarget/ReferenceCard";
const ArtistTargetData = ({ query }) => {
  const albumId = query.params[1];
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
    const randomSongKey = `${randomSongKeyLetter} ${
      randomSong.key[0].is_major ? "Major" : "Minor"
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
  return (
    <div className=" relative bg-cover min-h-screen  flex items-start justify-center px-6">
      <Image
        alt="a music studio background"
        className="absolute w-full h-full object-cover"
        src={studioImage}
      />
      <div className="flex flex-col items-center gap-8 w-full md:py-12  lg:max-w-48 lg:flex-row lg:items-start lg:justify-between  py-8">
        {/* White bg for content */}
        <div className="relative w-full flex flex-col items-center pt-10  bg-white md:max-w-26 rounded-4xl md:mb-6">
          {/* Loop Title */}
          <h2 className="text-2.5 text-primary font-semibold mb-8">
            {randomWord}
          </h2>
          {/* Data wrapper */}
          <div className="pb-6">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium mb-3">
                🎼 Chords (literal):
              </h3>
              <div className="flex gap-3">
                {splitChords.map((chord) => (
                  <div
                    key={chord}
                    className="flex items-center justify-center bg-primary rounded-full w-16 h-16 border-1 border-dark text-white "
                  >
                    <p className="text-1.5 font-semibold">{chord}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium mb-3">
                🎼 Chords (numerals):
              </h3>
              <div className="flex gap-3">
                {splitNumerals.map((numeral) => (
                  <div
                    key={numeral}
                    className="flex items-center justify-center bg-dark rounded-full w-16 h-16 text-white "
                  >
                    <p className="text-1.5 font-semibold">{numeral}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium ">🔑 Key:</h3>
              <p className="text-2 font-semibold">{randomSongSameParams.key}</p>
            </div>
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-1 font-semibold text-medium">🏃🏽‍♂️ Tempo:</h3>
              <p className="text-2 font-semibold">
                {" "}
                {randomSongSameParams.tempo} BPM
              </p>
            </div>
          </div>
          <LoopFileName loopName={loopName}></LoopFileName>
        </div>
        <ReferenceCard referenceInfo={referenceInfo} />
      </div>
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

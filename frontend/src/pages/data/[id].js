import React from "react";
import bgImage from "../../../public/assets/images/producer-table.png";
import Image from "next/image";
import Link from "next/link";
import { initializeApollo } from "../../../lib/apollo";
import { useQuery } from "@apollo/client";
import { ALBUM } from "../../../utils/queries";
import LoadingFullScreen from "../../components/Loading/LoadingFullScreen";
const DataAlbum = ({ album }) => {
  const albumData = album.data.album;
  console.log(`hi ${JSON.stringify(albumData.songs[0].key[0].key)}`);
  if (!album) return <LoadingFullScreen></LoadingFullScreen>;
  return (
    <section className="relative flex items-start justify-center py-12  min-h-screen w-full">
      <Image
        className="z-0 absolute top-0 h-full w-full object-cover"
        src={bgImage}
        alt="a music producer's table"
        priority
      />{" "}
      <div className="w-full  relative flex flex-col items-center bg-dark rounded-xl pt-12 pb-10 px-8 text-white">
        <div className="flex flex-col items-start w-full mb-5">
          <div className="mb-7">
            <h1 className="text-2.5 font-semibold mb-5">
              {albumData.album_name}
            </h1>
            <h2 className="italic font-medium text-1.125">{albumData.year}</h2>
          </div>
          <Image
            alt={`Album artwork for the album ${albumData.album_name}`}
            src={albumData.artwork}
            width={240}
            height={116}
            className="rounded-lg w-full h-40"
          />
        </div>
        {/* Tracklist */}
        <div className=" flex flex-col items-start w-full overflow-x-scroll h-fit">
          <h3 className="text-1.5 font-medium mb-3">Tracklist</h3>
          <div className=" flex justify-between w-full">
            <p className="text-0.875 font-semibold">Song name</p>
            <p className="text-0.875 font-semibold">Key</p>
            <p className="text-0.875 font-semibold">Tempo</p>
            <p className="text-0.875 font-semibold">Chords (numerals)</p>
            <p className="text-0.875 font-semibold">Chords (literal)</p>
          </div>
          {/* Map over songs */}
          <div className=" w-full">
            {albumData.songs.map((song) => (
              <div
                key={song._id}
                className="border-b-1  border-dark flex justify-between w-full bg-white text-dark rounded px-4 h-10 items-center"
              >
                <p className="text-1 font-semibold">{song.song_name}</p>
                <p className="text-1 font-semibold">{song.key[0].key}</p>
                <p className="text-1 font-semibold">{song.tempo}</p>
                <p className="text-1 font-semibold">
                  {song.progression[0].numerals}
                </p>
                <p className="text-1 font-semibold">
                  {song.progression[0].numerals}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAlbum;

export const getServerSideProps = async ({ query }) => {
  const queryID = query.id;
  const apolloClient = initializeApollo();

  const album = await apolloClient.query({
    query: ALBUM,
    variables: { albumId: queryID },
  });

  return {
    props: { album },
  };
};

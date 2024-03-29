import React, { useState, useContext } from "react";
import { LoginContext } from "../_app";
import bgImage from "../../../public/assets/images/producer-table.png";
import Image from "next/image";
import Link from "next/link";
import { initializeApollo } from "../../../lib/apollo";
import { useQuery } from "@apollo/client";
import { ALBUM, PROGRESSION_IN_SPECIFIC_KEY } from "../../../utils/queries";
import LoadingFullScreen from "../../components/Loading/LoadingFullScreen";
import SongDetailsModal from "../../components/Modals/SongDetailsModal";
import { hoverStyle } from "../../../utils/styles";
import Login from "../login";
const DataAlbum = ({ album }) => {
  const [loggedIn] = useContext(LoginContext);
  const [songModalOpen, setSongModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState({});
  const albumData = album.data.album;

  if (!album) return <LoadingFullScreen></LoadingFullScreen>;
  if (!loggedIn) return <Login />;
  return (
    <section className="relative flex flex-col items-center justify-start py-6  min-h-screen w-full">
      <Image
        className="z-0 absolute top-0 h-full w-full object-cover"
        src={bgImage}
        alt="a music producer's table"
        priority
      />{" "}
      {songModalOpen ? (
        <SongDetailsModal
          setSongModalOpen={setSongModalOpen}
          selectedSong={selectedSong}
        />
      ) : (
        ""
      )}
      <div className="text-white text-center relative mb-6 text-1.125 bg-dark  py-2 md:h-12 flex flex-col md:flex-row items-center justify-center px-12 rounded-full">
        <Link className=" " href={`/data`}>
          Data /
        </Link>
        <Link className="font-semibold ml-1 " href={albumData._id}>
          {albumData.album_name}
        </Link>
      </div>
      <div className="w-full md:max-w-46 relative flex flex-col md:items-center bg-dark md:rounded-xl pt-12 pb-10 px-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-5">
          <div className="mb-7  md:basis-1/2 ">
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
            className="rounded-lg w-full md:basis-1/2 h-40"
          />
        </div>
        {/* Tracklist */}
        <div className=" flex flex-col items-start md:w-full overflow-scroll  h-fit">
          <h3 className="text-1.5 font-medium mb-3">Tracklist</h3>
          <div className="overflow-scroll	 w-40 md:w-full">
            <div className=" flex justify-between w-full">
              <p className="text-0.875 font-semibold basis-2/5	">Song name</p>
              <p className="text-0.875 font-semibold basis-1/10		">Key</p>
              <p className="text-0.875 font-semibold basis-1/10		">Tempo</p>
              <p className="text-0.875 font-semibold basis-2/5	">
                Chords (numerals)
              </p>
            </div>
            {/* Map over songs */}
            <div className=" w-full">
              {albumData.songs.map((song) => (
                <div
                  onClick={() => {
                    setSelectedSong(song);
                    setSongModalOpen(true);
                    window.scrollTo(0, 0);
                  }}
                  key={song._id}
                  className={`border-b-1  border-dark flex justify-between w-full bg-white text-dark rounded px-4 h-10 items-center cursor-pointer
                  ${hoverStyle}`}
                >
                  <p className="text-1 font-semibold basis-2/5	">
                    {song.song_name}
                  </p>
                  <p className="text-1 font-semibold basis-1/10">
                    {song.key[0].is_major
                      ? `${song.key[0].key}`
                      : `${song.key[0].key}-`}
                  </p>
                  <p className="text-1 font-semibold basis-1/10	">
                    {song.tempo}
                  </p>
                  <p className="text-1 font-semibold basis-2/5	">
                    {song.progression[0].numerals}
                  </p>
                </div>
              ))}
            </div>
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

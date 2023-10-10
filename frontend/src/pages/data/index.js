import React, { useState, useContext } from "react";
import { LoginContext } from "../_app";
import bgImage from "../../../public/assets/images/producer-table.png";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { ALL_ALBUMS } from "../../../utils/queries";
import Login from "../login";
import LoadingFullScreen from "../../components/Loading/LoadingFullScreen";
const Data = () => {
  const [loggedIn] = useContext(LoginContext);
  const [allAlbums, setAllAlbums] = useState("");
  const { data: allAlbumsData, loading: allAlbumsLoading } =
    useQuery(ALL_ALBUMS);

  if (allAlbumsLoading) return <LoadingFullScreen />;
  if (!loggedIn) return <Login />;
  return (
    <section className="relative flex flex-col  items-center justify-start py-12 px-6 min-h-screen w-full">
      <Image
        className="z-0 absolute top-0 h-full w-full object-cover"
        src={bgImage}
        alt="a music producer's table"
        priority
      />

      <div className="w-full  md:max-w-24 relative flex flex-col items-center bg-dark rounded-xl pt-12 pb-10 px-8 text-white">
        <h2 className="text-2 font-semibold mb-5">Albums</h2>
        {/* Map out albums */}
        <div className="flex flex-col gap-2 lg:gap-1 w-full ">
          {allAlbumsData.albums.map((album) => (
            <Link
              href={`/data/${album._id}`}
              key={album.album_name}
              className="bg-white h-10 text-dark rounded flex flex-nowrap items-center w-full lg:max-w-24 gap-2.5"
            >
              <Image
                alt={`Album artwork for the album ${album.album_name}`}
                src={album.artwork}
                width={32}
                height={32}
                className="rounded-md pl-1"
              />
              <p className="font-semibold text-1">{album.album_name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;

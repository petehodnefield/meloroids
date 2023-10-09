import React, { useState, useEffect } from "react";
import bgImage from "../../../public/assets/images/producer-table.png";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { ALL_ALBUMS } from "../../../utils/queries";
const Data = () => {
  const [allAlbums, setAllAlbums] = useState("");
  const { data: allAlbumsData, loading } = useQuery(ALL_ALBUMS);

  if (loading) return <div>Loading...</div>;
  return (
    <section className="relative flex items-start justify-center py-12 px-6 min-h-screen w-full">
      <Image
        className="z-0 absolute top-0 h-full w-full object-cover"
        src={bgImage}
        alt="a music producer's table"
        priority
      />
      <div className="w-full  md:w-fit relative flex flex-col items-center bg-dark rounded-xl pt-12 pb-10 px-8 text-white">
        <h2 className="text-2 font-semibold mb-5">Albums</h2>
        {/* Map out albums */}
        <div className="flex flex-col gap-2 lg:gap-1 w-full ">
          {allAlbumsData.albums.map((album) => (
            <Link
              href={`/data/${album._id}`}
              key={album.album_name}
              className="bg-white h-10 text-dark rounded flex flex-nowrap items-center w-full lg:w-62 gap-2.5"
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

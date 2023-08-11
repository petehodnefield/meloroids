import React, { useEffect, useState } from "react";
import Image from "next/image";
import backgroundImage from "../../../public/assets/images/music-studio.png";
import { useQuery } from "@apollo/client";
import { ALL_ARTISTS } from "../../../utils/queries";
import { hoverStyle } from "../../../utils/styles";
import Link from "next/link";
const ArtistTarget = () => {
  const [artists, setArtists] = useState();
  const [selectedArtist, setSelectedArtist] = useState({
    name: "",
    albums: [],
    selectedAlbum: "",
  });
  console.log(selectedArtist);
  const [artistOpen, setArtistOpen] = useState(false);

  const [albumOpen, setAlbumOpen] = useState(false);
  const { loading, data: artistData, error } = useQuery(ALL_ARTISTS);
  useEffect(() => {
    if (!artistData || !artistData.artists) {
      return;
    } else {
      setArtists(artistData.artists);
    }
  }, [artistData]);
  return (
    <section className="bg-cover min-h-screen px-6 py-12 flex justify-center relative">
      {" "}
      <Image
        priority
        alt="A music studio desk with guitars and an imac"
        src={backgroundImage}
        className="bg__quickie absolute top-0 h-full object-cover z-0 w-full"
      />
      <div className="bg-white w-full flex flex-col items-center w-full h-fit py-8 md:max-w-26 rounded-4xl md:pb-10 relative">
        <h2 className="text-2.5 font-semibold text-primary mb-2">
          Artist Target
        </h2>
        <h2 className="text-1.25 font-mdeium mb-5">
          I want to make loops in the style of...
        </h2>
        {/* Artist Dropdown menu */}
        <form className="w-full px-6 relative">
          {/* Select the Artist */}
          <div className="mb-6">
            <label className="text-0.875 font-semibold">Artist</label>
            <div
              className={`h-12 w-full border-2 rounded-lg flex justify-between items-center
                     `}
              onClick={() => setArtistOpen(!artistOpen)}
            >
              <div className="w-12 text-center">🎤</div>
              <p className="text-left w-full text-0.875 font-semibold">
                {selectedArtist.name}{" "}
              </p>
              <div className="w-12 h-12 flex items-center justify-center">
                {" "}
                ⌄
              </div>
            </div>
            {artistOpen ? (
              <div className="border-2 rounded-lg absolute w-4/5 mt-3 menu-dropdown bg-white z-30 max-h-14 overflow-scroll">
                {artists.map((artist) => (
                  <div
                    key={artist.name}
                    className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                    onClick={() => {
                      setArtistOpen(!artistOpen);
                      setSelectedArtist({
                        ...selectedArtist,
                        name: artist.name,
                        albums: artist.albums,
                      });
                    }}
                  >
                    <div className="w-12 text-center">🎤</div>
                    <p className="text-left w-full text-0.875 font-semibold">
                      {artist.name}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Select the Album */}
          <div className="mb-6">
            <label className="text-0.875 font-semibold">Album</label>
            <div
              className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
           `}
              onClick={() => setAlbumOpen(!albumOpen)}
            >
              <div className="w-12 text-center">💿</div>
              <p className="text-left w-full text-0.875 font-semibold">
                {selectedArtist.selectedAlbum
                  ? selectedArtist.selectedAlbum
                  : ""}
              </p>
              <div className="w-12 h-12 flex items-center justify-center">
                {" "}
                ⌄
              </div>
            </div>
            {albumOpen ? (
              <div className="border-2 rounded-lg absolute w-4/5 mt-3 menu-dropdown bg-white z-30 max-h-14 overflow-scroll">
                {selectedArtist.albums.map((album) => (
                  <div
                    key={album.album_name}
                    className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                    onClick={() => {
                      setAlbumOpen(!albumOpen);
                      setSelectedArtist({
                        ...selectedArtist,
                        selectedAlbum: album.album_name,
                      });
                    }}
                  >
                    <div className="w-12 text-center">💿</div>
                    <p className="text-left w-full text-0.875 font-semibold">
                      {album.album_name}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <Link
            href={`/artist-target/${selectedArtist.name}/${selectedArtist.selectedAlbum}`}
          >
            Start
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ArtistTarget;

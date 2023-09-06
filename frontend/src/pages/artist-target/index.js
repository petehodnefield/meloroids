import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../_app";
import Image from "next/image";
import backgroundImage from "../../../public/assets/images/music-studio.png";
import { useQuery } from "@apollo/client";
import { ALL_ARTISTS } from "../../../utils/queries";
import { hoverStyle } from "../../../utils/styles";
import Link from "next/link";
import Login from "../login";
const ArtistTarget = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [artists, setArtists] = useState();
  const [selectedArtist, setSelectedArtist] = useState({
    name: "",
    image: "",
    albums: [],
    selectedAlbum: "",
    selectedAlbumId: "",
    selectedAlbumArtwork: "",
  });
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
  if (!loggedIn) return <Login />;
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
        <h2 className="text-2.5 font-semibold text-primary mb-4">
          Artist Target
        </h2>
        <h2 className="text-1.25 font-medium mb-5">Select an Artist </h2>
        {/* Artist Dropdown menu */}
        <form className="w-full px-6 relative flex flex-col items-center">
          {/* Select the Artist */}
          <div className="mb-4 w-full">
            <label className="text-0.875 font-semibold">Artist</label>
            <div
              className={`h-12 w-full border-2 rounded-lg flex justify-between items-center
                     `}
              onClick={() => setArtistOpen(!artistOpen)}
            >
              {selectedArtist.image ? (
                <div className="h-12 w-12 py-2 pl-2 mr-2">
                  <img
                    alt={`Album artwork for ${selectedArtist.name}`}
                    className="w-12 h-12 rounded h-full object-cover "
                    src={selectedArtist.image}
                  />{" "}
                </div>
              ) : (
                <div className="w-12 text-center pl-2">🎤</div>
              )}
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
                        image: artist.image,
                        selectedAlbum: "",
                        selectedAlbumArtwork: "",
                      });
                      setAlbumOpen(false);
                    }}
                  >
                    <div className="w-14 h-8 text-center pl-2 mr-4">
                      {artistOpen ? (
                        <img
                          alt={`Album artwork for ${artist.name}`}
                          className="w-full h-full rounded h-full object-cover "
                          src={artist.image}
                        />
                      ) : (
                        "🎤"
                      )}
                    </div>
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
          <div className="mb-8 w-full">
            <label className="text-0.875 font-semibold">Album</label>
            <div
              className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
           ${
             !selectedArtist.name
               ? "pointer-events-none bg-medium opacity-40"
               : ""
           }
              `}
              onClick={() => setAlbumOpen(!albumOpen)}
            >
              <div className="w-12 text-center py-2 pl-2 mr-2">
                {selectedArtist.selectedAlbumArtwork ? (
                  <img
                    alt={`Album artwork for ${selectedArtist.selectedAlbumArtwork}`}
                    className="w-10 rounded h-full object-cover mr-6"
                    src={selectedArtist.selectedAlbumArtwork}
                  />
                ) : (
                  "💿"
                )}
              </div>
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
                    className={`h-12 py-2 pl-2  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                    onClick={() => {
                      setAlbumOpen(!albumOpen);
                      setSelectedArtist({
                        ...selectedArtist,
                        selectedAlbum: album.album_name,
                        selectedAlbumArtwork: album.artwork,
                        selectedAlbumId: album._id,
                      });
                    }}
                  >
                    <img
                      alt={`Album artwork for ${album.album_name}`}
                      className="w-10 rounded h-full object-cover"
                      src={album.artwork}
                    />{" "}
                    <p className="text-left w-full text-0.875 font-semibold ml-4">
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
            href={`/artist-target/${selectedArtist.name}/${selectedArtist.selectedAlbumId}`}
            className={`flex items-center  justify-center rounded h-12 w-48 bg-primary text-1 font-semibold text-white ${
              !selectedArtist.name || !selectedArtist.selectedAlbum
                ? "pointer-events-none bg-medium opacity-40"
                : ""
            }`}
          >
            Start
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ArtistTarget;

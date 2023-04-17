import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Key from "../models/Key.js";
import Progression from "../models/Progression.js";
import Song from "../models/Song.js";
import { albumsData } from "./seed-data/albums.js";
import { artistData } from "./seed-data/artists.js";
import { genresData } from "./seed-data/genres.js";
import { keysData } from "./seed-data/keys.js";
import { progressionData } from "./seed-data/progressions.js";
import { songsData } from "./seed-data/songs.js";

export const seedDB = async () => {
  // await Key.deleteMany();
  // await Artist.deleteMany();
  // await Album.deleteMany();
  // await Genre.deleteMany();
  await Progression.deleteMany();
  // await Song.deleteMany();

  // const createdKeys = await Key.create(keysData);
  // const createdGenres = await Genre.create(genresData);
  // const createdArtists = await Artist.create(artistData);
  // const createdAlbums = await Album.create(albumsData);
  // const createdSongs = await Song.create(songsData);
  const createdProgressions = await Progression.create(progressionData);
};

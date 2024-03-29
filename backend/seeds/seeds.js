import Album from "../models/Album.js";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";
import Key from "../models/Key.js";
import Progression from "../models/Progression.js";
import Song from "../models/Song.js";
import User from "../models/User.js";
import { albumsData } from "./seed-data/albums.js";
import { artistData } from "./seed-data/artists.js";
import { genresData } from "./seed-data/genres.js";
import { keysData } from "./seed-data/keys.js";
import { progressionData } from "./seed-data/progressions.js";
import { songsData } from "./seed-data/songs.js";
import { usersData } from "./seed-data/user.js";
import { juiceWrldSongs } from "./seed-data/songs.js";
export const seedDB = async () => {
  await User.deleteMany();
  // await Key.deleteMany();
  // await Artist.deleteMany();
  // await Album.deleteMany();
  // await Genre.deleteMany();
  // await Progression.deleteMany();
  // await Song.deleteMany();
  // await User.deleteMany();

  // const createdKeys = await Key.create(keysData);
  // const createdGenres = await Genre.create(genresData);
  // const createdArtists = await Artist.create(artistData);
  // const createdAlbums = await Album.create(albumsData);
  // const createdSongs = await Song.create(juiceWrldSongs);
  // const createdProgressions = await Progression.create(progressionData);
  // const createdUsers = await User.create(usersData);
  // const updateAlbum = async (song) => {
  //   return await Album.findOneAndUpdate(
  //     { _id: song.album_id },
  //     { $push: { songs: { song_name: song.song_name, tempo: song.tempo } } },
  //     { new: true }
  //   );
  // };
  // // Update Album
  // juiceWrldSongs.forEach((song) => {
  //   updateAlbum(song);
  // });

  console.log("db seeded! 🌱");
};

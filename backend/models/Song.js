import mongoose from "mongoose";
const { Schema } = mongoose;

const songSchema = new Schema({
  song_name: {
    required: true,

    type: String,
    minLength: 1,
    maxLength: 100,
  },
  tempo: {
    required: true,
    type: Number,
    max: 300,
  },
  popularity: {
    type: Number,
  },
  artist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
  progression: [
    {
      type: Schema.Types.ObjectId,
      ref: "Progression",
    },
  ],
  album: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  ],
  key: [
    {
      type: Schema.Types.ObjectId,
      ref: "Key",
    },
  ],
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "Genre",
    },
  ],
});
const Song = mongoose.model("Song", songSchema);

export default Song;

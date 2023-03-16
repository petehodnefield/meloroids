import mongoose from "mongoose";
const { Schema } = mongoose;
import DateFormat from "../utils/DateFormat.js";

const albumSchema = new Schema({
  album_name: {
    required: true,
    unique: true,
    type: String,
    maxLength: 40,
  },
  artwork: {
    required: true,
    type: String,
  },
  year: {
    type: Date,
    get: (timestamp) => DateFormat(timestamp),
  },
  popularity: {
    type: Number,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  artist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
});

const Album = mongoose.model("Album", albumSchema);
export default Album;

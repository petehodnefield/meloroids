import mongoose from "mongoose";
const { Schema } = mongoose;
import DateFormat from "../utils/DateFormat.js";

const albumSchema = new Schema({
  album_name: {
    required: true,
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
});

const Album = mongoose.model("Album", albumSchema);
export default Album;

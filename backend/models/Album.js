import mongoose from "mongoose";
const { Schema } = mongoose;
import DateFormat from "../utils/DateFormat";

const albumSchema = new Schema({
  album_name: {
    required,
    type: String,
    maxLength: 40,
  },
  artwork: {
    required,
    type: String,
  },
  Year: {
    required,
    type: Date,
  },
  createdAt: {
    type: Date,
    get: (timestamp) => DateFormat(timestamp),
  },
  popularity: {
    type: Number,
  },
});

const Album = mongoose.model("Album", albumSchema);
export default Album;

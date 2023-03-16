import mongoose from "mongoose";
const { Schema } = mongoose;

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
    type: Number,
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

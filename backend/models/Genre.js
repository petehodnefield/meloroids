import mongoose from "mongoose";
const { Schema } = mongoose;

const genreSchema = new Schema({
  genre: {
    required: true,
    type: String,
  },
  progressions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Progression",
    },
  ],
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});
const Genre = mongoose.model("Genre", genreSchema);

export default Genre;

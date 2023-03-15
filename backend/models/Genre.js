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
});
const Genre = mongoose.model("Genre", genreSchema);

export default Genre;

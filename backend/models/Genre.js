import mongoose from "mongoose";
const { Schema } = mongoose;

const genreSchema = new Schema({
  genre: {
    required,
    type: String,
  },
});
const Genre = mongoose.model("Genre", genreSchema);

export default Genre;

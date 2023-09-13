import mongoose from "mongoose";
const { Schema } = mongoose;

const artistSchema = new Schema({
  name: {
    required: true,
    type: String,
    minLength: 1,
    maxLength: 30,
    unique: true,
  },
  age: {
    type: Number,
  },
  image: {
    required: true,
    type: String,
  },
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  ],
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;

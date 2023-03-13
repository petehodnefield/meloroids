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
    required: true,
    type: Number,
  },
  image: {
    required: true,
    type: String,
  },
});

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;

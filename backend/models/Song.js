import mongoose from "mongoose";
const { Schema } = mongoose;

const songSchema = new Schema({
  song_name: {
    required: true,

    type: String,
    minLength: 1,
    maxLength: 40,
  },
  tempo: {
    required: true,
    type: Number,
    max: 220,
  },
  popularity: {
    type: Number,
  },
  progression: {
    type: Schema.Types.ObjectId,
    ref: "Progression",
  },
});
const Song = mongoose.model("Song", songSchema);

export default Song;

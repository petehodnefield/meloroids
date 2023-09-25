import mongoose from "mongoose";
const { Schema } = mongoose;

const allKeysSchema = new Schema({
  key: {
    type: String,
  },
  progression_in_key: {
    type: String,
  },
  midi_file: {
    type: String,
  },
});

const progressionSchema = new Schema({
  numerals: {
    required: true,
    unique: true,
    type: String,
    maxLength: 30,
  },
  is_major: {
    required: true,
    type: Boolean,
  },
  all_keys: [allKeysSchema],
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});
const Progression = mongoose.model("Progression", progressionSchema);

export default Progression;

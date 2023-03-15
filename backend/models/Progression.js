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
    type: String,
    maxLength: 30,
  },
  tempo: {
    type: Number,
    max: 220,
  },
  is_major: {
    required: true,
    type: Boolean,
  },
  all_keys: [allKeysSchema],
});
const Progression = mongoose.model("Progression", progressionSchema);

export default Progression;

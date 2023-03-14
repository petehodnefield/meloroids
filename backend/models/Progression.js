import mongoose from "mongoose";
const { Schema } = mongoose;

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
  all_keys: [
    {
      key: String,
      progression_in_key: String,
      midi_file: String,
    },
  ],
});
const Progression = mongoose.model("Progression", progressionSchema);

export default Progression;

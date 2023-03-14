import mongoose from "mongoose";
const { Schema } = mongoose;

const keySchema = new Schema({
  key: {
    required,
    type: String,
  },
  is_major: {
    required,
    type: boolean,
  },
  midi_file: {
    required,
    type: String,
  },
});
const Key = mongoose.model("Key", keySchema);

export default Key;

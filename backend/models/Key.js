import mongoose from "mongoose";
const { Schema } = mongoose;

const keySchema = new Schema({
  key: {
    required: true,
    type: String,
  },
  is_major: {
    required: true,
    type: Boolean,
  },
});
const Key = mongoose.model("Key", keySchema);

export default Key;

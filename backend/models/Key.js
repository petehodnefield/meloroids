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
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});
const Key = mongoose.model("Key", keySchema);

export default Key;

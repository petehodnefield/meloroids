import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";

const saltRounds = 10;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // TODO: add password requirements later
  },
  email: {
    type: String,
    required: true,
    // TODO: Add email validation later
  },
  instagramHandle: {
    type: String,
  },
  bio: {
    type: String,
  },
});
// TODO: Make sure password gets hashed upon updating
userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;

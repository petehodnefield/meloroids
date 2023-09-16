import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";

const saltRounds = 10;

const premiumSchema = new Schema({
  accountType: { type: String, default: "free" },
  isActive: { type: Boolean },
  subscriptionStartDate: { type: Date },
  subscriptionEndDate: { type: Date },
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 20,
    },
    password: {
      type: String,
      required: true,
      validate:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      min: 5,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      min: 4,
      max: 30,
    },
    instagramHandle: {
      type: String,
      required: true,
      min: 2,
      max: 30,
    },
    profilePicture: {
      type: String,
      max: 80,
    },
    bio: {
      type: String,
      max: 280,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    premiumAccount: [premiumSchema],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// Hashing data before updating into database
userSchema.pre("findOneAndUpdate", async function (next) {
  try {
    if (this._update.password) {
      const hashed = await bcrypt.hash(this._update.password, saltRounds);
      this._update.password = hashed;
    }
    next();
  } catch (err) {
    return next(err);
  }
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;

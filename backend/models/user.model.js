import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    isAdmin:{
      default: false,
      type: Boolean
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);

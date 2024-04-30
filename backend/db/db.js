import mongoose from "mongoose";
import express from "express";
const app = express();
const port = 4000;
export const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://abhishekpanwarcseiot2022:5625panwar@frontend.xfm28oy.mongodb.net/");
    console.log("data base connected ", conn.connection.host);
  } catch (error) {
    console.log("error connecting to data base", error.message);
  }
};

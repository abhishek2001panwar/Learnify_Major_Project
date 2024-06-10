

import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name: String,
    email: String,
    resume: String,
  });

 export const File = mongoose.model('file', fileSchema);
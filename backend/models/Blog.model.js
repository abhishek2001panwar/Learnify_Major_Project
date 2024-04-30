import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }
});

export const Blog = mongoose.model('Blog', blogSchema);


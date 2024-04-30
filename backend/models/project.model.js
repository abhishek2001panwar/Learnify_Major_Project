import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String ,
        required: true
    },
    projectLink: {
        type: String,
        required: true,
    }
});

 export const Project = mongoose.model('Project', projectSchema);


import mongoose from "mongoose";
const { Schema } = mongoose;
const projectSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        default: 'Untitled Project' // Default value if not provided
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    projectLink: {
        type: String,
        required: [true, 'Project link is required']
    }
});

 export const Project = mongoose.model('Project', projectSchema);


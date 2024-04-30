import mongoose from "mongoose";
const { Schema } = mongoose;

const carouselSchema = new Schema({
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

 export const Carousel = mongoose.model('Carousel', carouselSchema);


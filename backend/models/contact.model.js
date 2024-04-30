
import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

export const Contact = mongoose.model('Contact', contactSchema);


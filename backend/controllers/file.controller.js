
import { File } from "../models/file.model.js";
export const fileController = async (req, res) => {
    try {
        const { name, email } = req.body;
        const resume = req.file.path;

        const newFile = new File({
            name,
            email,
            resume,
        });

        await newFile.save();
        res.status(201).json({ message: "File created successfully!" });
    } catch (error) {
        console.log(error);
    }
};

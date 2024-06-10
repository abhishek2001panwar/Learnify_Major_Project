import express from 'express';
import { upload } from '../helper/multer.js';
import { fileController } from '../controllers/file.controller.js';
const router = express.Router();

router.post('/upload', upload.single('resume'), fileController)
export  {router};
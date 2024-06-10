import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      const uniqueFileName = uuidv4();
      cb(null, uniqueFileName + path.extname(file.originalname));
    }
  });
export const upload = multer({ storage: storage });
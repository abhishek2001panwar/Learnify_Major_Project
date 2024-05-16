import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __test_dirname = path.dirname(__filename);
const __dirname = path.dirname(__test_dirname + ".test");

const router = express();
router.use(express.static(path.join(__dirname, "build")));

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

export {router};
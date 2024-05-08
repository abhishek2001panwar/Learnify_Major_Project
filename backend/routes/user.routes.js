import express from 'express';
const router = express.Router();
import { registerUser, loginUser, logoutUser ,allUser } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/adminmiddleware.js';
router.post("/register",   registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/Alluser", allUser);


export { router };

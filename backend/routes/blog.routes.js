import express from 'express';
import {getBlogs,getAllBlogs} from  '../controllers/blog.controller.js';

const router = express.Router();


//route for adding blogs 

router.post('/addBlog', getBlogs )
router.get('/getallblog', getAllBlogs )



export  {router};
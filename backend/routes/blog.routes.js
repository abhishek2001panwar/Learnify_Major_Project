import express from 'express';
import {getBlogs,getAllBlogs,getOneBlogs,deleteBlog ,updateBlog} from  '../controllers/blog.controller.js';

const router = express.Router();


//route for adding blogs 

router.post('/addBlog', getBlogs )
router.get('/getallblog', getAllBlogs )
router.get('/getoneblog/:id', getOneBlogs )
router.delete('/deleteblog/:id', deleteBlog )
router.patch('/updateblog/:id', updateBlog )





export  {router};
import express from 'express';
import {getProject ,getAllProjects ,getProjectById} from  '../controllers/project.controller.js';

const router = express.Router();


//route for adding blogs 

router.post('/addproject',getProject )
router.get('/getallproject',getAllProjects )
router.get('/getoneproject/:id',getProjectById )





export  {router};
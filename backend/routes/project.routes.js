import express from 'express';
import { getProject, getAllProjects, getProjectById ,deleteProject ,updateProject} from '../controllers/project.controller.js';

const router = express.Router();

// Route for adding a project
router.post('/addproject', getProject);

// Route for getting all projects
router.get('/getallproject', getAllProjects);

// Route for getting a project by ID
router.get('/getoneproject/:id', getProjectById);
router.delete('/deleteproject/:id', deleteProject);
router.patch('/updateproject/:id', updateProject);





export { router };

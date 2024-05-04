import express from "express";
import {
  getAllCourses,
  postCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
const router = express.Router();

//routes for all courses
router.get("/allcourses", getAllCourses);

// route for posting a course
router.post("/postcourse", postCourse);

//route for single course
router.get("/singlecourse/:id", getCourse);

//route for deleting a course

router.delete("/deletecourse/:id", deleteCourse);

//route for updating a course

router.put("/updatecourse/:id", updateCourse);
export { router };

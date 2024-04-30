import { Course } from "../models/courses.model.js";

//controller for all courses
export const getAllCourses = async (req, res) => {

  try {
    const courses = await Course.find({})
    res.status(200).json({
      message: "Courses fetched/retrived successfully",
      courses: courses,
    });

  } catch (error) {
  console.log(error.message)
  res.status(500).json({ message: error.message });
  }
};

//controller for posting courses

export const postCourse = async (req, res) => {
  try {
    const { title, description, content } = req.body;

    const newCourse = new Course({
      title,
      description,
      content,
    });
    const savedCourse = await newCourse.save();
    res.status(201).json({
      message: "Course created successfully",
      data: savedCourse,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
// controller for single course

export const getCourse = async (req, res) => {};

// controller for updating course

export const updateCourse = async (req, res) => {};

// controller for deleting course

export const deleteCourse = async (req, res) => {};

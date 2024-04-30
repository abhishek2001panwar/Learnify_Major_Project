import { Project } from "../models/project.model.js";

export const getProject = async (req, res) => {
  try {
    const { title, description , projectLink } = req.body;

    const newProjectPost = new Project({
      title,
      description: description,
      projectLink: projectLink,
    });
    await newProjectPost.save();
    return res.status(201).json({
      message: "Project post created successfully",
      newProjectPost: newProjectPost,
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating project post:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getAllProjects = async (req, res) => {
 try {
    const project = await Project.find({})

    return res.status(201).json({
      message: " all Project retrived successfully",
      project: project,
    });


 } catch (error) {
  console.log(error , " error getting projects")
  throw new Error(error.ErrorMessage)
 }


}

export const getProjectById = async (req, res) => {
try {
  const {id } = req.params
  const project = await Project.findById(id)
  return res.status(201).json({
    message: " Project retrived successfully",
    project: project,
  });


} catch (error) {
  console.log(error , " error getting project")
    res.status(500).json({
      error: "Internal server error",
    });
}

}
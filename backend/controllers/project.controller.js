import { Project } from "../models/project.model.js";

export const getProject = async (req, res) => {
  try {
    const { title, description, projectLink } = req.body;

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
    const project = await Project.find({});

    return res.status(201).json({
      message: " all Project retrived successfully",
      project: project,
    });
  } catch (error) {
    console.log(error, " error getting projects");
    throw new Error(error.ErrorMessage);
  }
};
// Controller function to get a project by ID
// export const getProjectById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const project = await Project.findById(id);

//     if (!project) {
//       return res.status(404).json({
//         error: "Project not found",
//       });
//     }

//     return res.status(200).json({
//       message: "Project retrieved successfully",
//       project,
//     });
//   } catch (error) {
//     console.error("Error getting project:", error.message);
//     return res.status(500).json({
//       error: "Internal server error",
//     });
//   }
// };
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params; // Yahan 'params' se 'id' extract karna chahiye
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    return res.status(200).json({
      message: "Project retrieved successfully",
      project,
    });
  } catch (error) {
    console.error("Error getting project:", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const deleteProject = async (req , res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    
    return res.status(200).json({
      message: "Project deleted successfully",
    });

  } catch (error) {
    console.log(error);
    throw new Error(error.ErrorMessage);
  }
};

export const updateProject = async(req ,res)=>{
  try {
    const { id } = req.params;
    const { title, description, projectLink } = req.body;
    const project = await Project.findByIdAndUpdate(id, {
      title,
      description,
      projectLink,
    });
    return res.status(200).json({
      message: "Project updated successfully",
      project,
    });
    
  } catch (error) {
    console.log(error);
    throw new Error(error.ErrorMessage);
  }
}
import { Blog } from "../models/Blog.model.js";

//controller for posting blogs
export const getBlogs = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlogPost = new Blog({
      title,
      content,
    });
    await newBlogPost.save();
    return res.status(201).json({
      message: "Blog post created successfully",
      newBlogPost: newBlogPost,
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating blog post:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
//controller for getting all blog posts

export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    return res.status(200).json({
      message: "All blog posts retrieved successfully",
      allBlogs: allBlogs,
    });
  } catch (error) {
    // Handle errors
    console.error("Error getting all blog posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getOneBlogs = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    return res.status(200).json({
      message: "Blog retrieved successfully",
      blog: blog,
    });
  } catch (error) {
    // Handle errors
    console.error("Error getting all blog posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Blog deleted successfully",
      blog: blog,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
    throw new Error(error.message);
  }
};

export const updateBlog = async(req,res)=>{
  try {
    const {title , description} = req.body
    const blog = await Blog.findByIdAndUpdate(req.params.id, {
      title,
      description,
    }, {
      new: true,
    });
    return res.status(200).json({
      message: "Blog updated successfully",
      blog: blog,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
    throw new Error(error.message);
  }
}
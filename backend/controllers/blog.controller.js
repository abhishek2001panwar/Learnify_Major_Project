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
    return res
      .status(201)
      .json({
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

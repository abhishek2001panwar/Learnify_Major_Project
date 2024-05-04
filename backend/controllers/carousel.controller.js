import { Carousel } from "../models/carousel.model.js";

export const getCarousel = async (req, res) => {
  try {
    const { title, description , projectLink } = req.body;

    const newCarousel = new Carousel({
      title,
      description: description,
      projectLink: projectLink,
    });
    await newCarousel.save();
    return res.status(201).json({
      message: "Carousel created successfully",
      newCarousel: newCarousel,
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating Carousel post:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllCarousel = async (req, res) => {
  try {
    const data = await Carousel.find({});
    res.status(200).json({
      message: "Carousel data retrieved successfully",
      data: data,
    });
   
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOneCarousel = async (req, res) => {
  try {

const {id} = req.params
    const carousel = await Carousel.findById(id);
    res.status(200).json({
      message: "Carousel data retrieved successfully",
      carousel: carousel,
    });
   
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

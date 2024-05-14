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

// export const getAllCarousel = async (req, res) => {
//   try {
//     const data = await Carousel.find({});
//     res.status(200).json({
//       message: "Carousel data retrieved successfully",
//       data: data,
//     });
   
//   } catch (error) {
//     console.error("Error fetching carousel data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
export const getAllCarousel = async (req, res) => {
  try {
    // Retrieve limit and page number from query parameters, with default values
    const limit = parseInt(req.query.limit) || 6; // Default limit is 10
    const page = parseInt(req.query.page) || 1; // Default page is 1

    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // Fetch the carousel data with limit and skip
    const data = await Carousel.find({}).limit(limit).skip(skip);

    // Get the total count of documents for pagination metadata
    const totalDocuments = await Carousel.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);

    res.status(200).json({
      message: "Carousel data retrieved successfully",
      data: data,
      meta: {
        totalDocuments: totalDocuments,
        totalPages: totalPages,
        currentPage: page,
        limit: limit
      }
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

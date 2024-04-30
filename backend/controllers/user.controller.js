import { hashedPassword, comparePassword } from "../helper/helper.js";
import { User } from "../models/user.model.js";
import  jwt  from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;
    if (!name || !email || !password || !username) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const hashedpassword = await hashedPassword(password);
    const newUser = await new User({
      name,
      email,
      username,
      password: hashedpassword,
    });
    const savedUser = await newUser.save();
    res.status(200).json({
      message: "user registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    if (User) {
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid email or password",
        });
      }
      const token = jwt.sign({ _id: user._id }, "abhishek", {
        expiresIn: "1h",
      });
      res.status(200).json({
        message: "user logged in successfully",
        token: token,
        user: user,
      });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while logging in the user" });
  }
};

export const logoutUser = async (req, res) => {
  try {

    
    res.status(200).json({
      message: "user logout successfully",
    });
  } catch (error) {
    console.error("Error logging out user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while logging out the user" });
  }
};

export const allUser = async (req, res) => {

try {
      const user = await User.find({})
      res.status(200).json({
        message: " all user retrived  in successfully",
        user
      });


} catch (error) {
console.log(error , "error in getting all user")  
}


}
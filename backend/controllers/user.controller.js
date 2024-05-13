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
      const isAdmin = await checkIfUserIsAdmin(req.body.email);

      res.status(200).json({
        message: "user logged in successfully",
        token: token,
        user: user,
        isAdmin: isAdmin,
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
    // Clear the JWT from client-side storage
    res.clearCookie('jwtToken'); // Clear the JWT from cookies if using cookies for storage
    // or
    // localStorage.removeItem('jwtToken'); // Clear the JWT from localStorage if using localStorage for storage

    // Respond with a success message
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error logging out user:", error);
    return res.status(500).json({ error: "An error occurred while logging out the user" });
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
export const deleteUser = async(req, res)=>{
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "user deleted successfully"
    })
  } catch (error) {
    console.log(error, "error in deleting user")
  }
}
 export const checkIfUserIsAdmin = async (email) => {
  const user = await User.findOne({ email });
  return user.isAdmin 
};
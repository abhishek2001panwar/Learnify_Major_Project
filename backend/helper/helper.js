import bcrypt from "bcrypt";

export const hashedPassword = async (password) => {
  try {
    const salt = 10;
    const hashedpassword = await bcrypt.hash(password, salt);
    return hashedpassword;
  } catch (error) {
    console.log(error);
  }
};
export const comparePassword = (password, hashpassword) => {
  return bcrypt.compare(password, hashpassword);
};

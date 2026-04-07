import bcrypt from "bcrypt";
import { User } from "../../models/user.model";
import { generateToken } from "../../utils/jwt";

export const registerUser = async (email: string, password: string) => {
  const exist = await User.findOne({ email });
  if (exist) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });

  return { user, token: generateToken(user._id.toString()) };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  return { user, token: generateToken(user._id.toString()) };
};
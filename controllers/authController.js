import UserModel from "../models/userModel.js";
import {
  comparePassword,
  hashPassword,
} from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export async function signup(req, res, next) {
  try {
    const { name, age, email, password } = req.body;

    //basic validation => no fields are empty
    if (!name || !age || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    //check if user is already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      res.status(409).json({
        message: "User already exists",
      });
    }

    //hash passowrd
    const hashedPassword = await hashPassword(password);

    //create user
    const user = await UserModel.create({
      name,
      age,
      email,
      password: hashedPassword,
    });

    //generate token
    const token = generateToken(user._id);

    //send response
    res.status(201).json({
      message: "Signup successful",
      token,
    });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    //basic validation
    if (!email || !password) {
      res.status(400).json({
        message: "Email and Password are required",
      });
    }

    //find user
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    //compare password
    const passwordMatch = await comparePassword(
      password,
      user.password,
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    //generate token
    const token = generateToken(user._id);

    //send response
    res.status(200).json({
      message: "login successful",
      token,
    });
  } catch (err) {
    next(err);
  }
}

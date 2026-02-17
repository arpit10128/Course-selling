import adminModel from "../models/adminModel.js";
import {
  comparePassword,
  hashPassword,
} from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export async function adminSignup(req, res, next) {
  try {
    const { firstName, lastName, email, password } =
      req.body;

    //check if there is no field is empty
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    //check if the admin is already exists
    const existingAdmin = await adminModel.findOne({
      email,
    });

    if (existingAdmin) {
      res.status(409).json({
        message: "Admin already exists",
      });
    }

    //hash password
    const hashedPassword = await hashPassword(password);

    //create admin
    const admin = await adminModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    //generate token
    const token = generateToken(
      admin._id,
      process.env.JWT_ADMIN_SECRET,
    );

    //send response
    res.status(201).json({
      message: "Signup Successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
}

export async function adminLogin(req, res, next) {
  try {
    const { email, password } = req.body;

    //basic validations => check all fields are filled
    if (!email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    //find user
    const existingAdmin = await adminModel.findOne({
      email,
    });

    if (!existingAdmin) {
      res.status(404).json({
        message: "Admin not found",
      });
    }

    //compare password
    const comparedPassword = comparePassword(
      password,
      existingAdmin.password,
    );

    if (!comparedPassword) {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }

    //generate token
    const token = generateToken(
      existingAdmin._id,
      process.env.JWT_ADMIN_SECRET,
    );

    //send response
    res.status(200).json({
      message: "login successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
}

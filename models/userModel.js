import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

const UserModel = mongoose.model("users", User);

export default UserModel;

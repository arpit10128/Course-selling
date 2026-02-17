import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
});

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;

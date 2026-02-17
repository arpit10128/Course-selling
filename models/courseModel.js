import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const coursesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trime: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    imgUrl: {
      type: String,
    },
    creatorId: {
      type: ObjectId,
      ref: "admin",
    },
  },
  { timestamps: true },
);

const coursesModel = mongoose.model(
  "courses",
  coursesSchema,
);

export default coursesModel;

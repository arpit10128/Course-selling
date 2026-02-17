import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const purchaseSchema = new Schema({
  courseId: {
    type: ObjectId,
    ref: "courses",
  },
  userId: {
    type: ObjectId,
    ref: "users",
  },
});

const purchaseModel = mongoose.model(
  "purchased",
  purchaseSchema,
);

export default purchaseModel;

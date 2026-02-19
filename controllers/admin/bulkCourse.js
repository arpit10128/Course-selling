import coursesModel from "../../models/courseModel.js";

export async function bulkCourse(req, res, next) {
  try {
    const adminId = req.adminId;

    const courses = await coursesModel.find({
      creatorId: adminId,
    });

    res.status(200).json({
      message: "All Of your courses are here",
      courses,
    });
  } catch (err) {
    next(err);
  }
}

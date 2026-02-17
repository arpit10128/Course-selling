import coursesModel from "../../models/courseModel.js";

export async function deleteCourse(req, res, next) {
  try {
    const adminId = req.adminId;

    const { courseId } = req.params;

    //Unoptimal way
    // There is external input for creatorId (taking creatorId from req.body)
    // Ensure an admin cannot update another admin's course
    // const check = await coursesModel.findOne({
    //   _id: courseId,
    //   creatorId: adminId,
    // });

    // if (!check) {
    //   return res.status(403).json({
    //     message:
    //       "You are not authorized to delete this course.",
    //   });
    // }

    const result = await coursesModel.deleteOne({
      _id: courseId,
      creatorId: adminId, //Ownership check here
    });

    if (result.deletedCount === 0) {
      return res.status(403).json({
        message:
          "You are not authorized to delete this course.",
      });
    }

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (err) {
    next(err);
  }
}

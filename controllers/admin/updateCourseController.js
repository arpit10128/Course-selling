import coursesModel from "../../models/courseModel.js";

export async function updateCourse(req, res, next) {
  try {
    const adminId = req.adminId;

    const { title, description, price, imageUrl } =
      req.body;

    const { courseId } = req.params;

    const updatedCourse =
      await coursesModel.findOneAndUpdate(
        {
          _id: courseId,
          creatorId: adminId, //Ownership check here
        },
        {
          title,
          description,
          price,
          imageUrl,
        },
        {
          new: true, //By default, Mongoose returns the old document, Now Mongoose returns the updated document.
          runValidators: true, //By default, Mongoose DOES NOT run schema validation on updates.Now Mongoose enforces schema rules during update.
        },
      );

    if (!updatedCourse) {
      return res.status(403).json({
        message:
          "You are not authorized to update this course.",
      });
    }

    res.status(200).json({
      message: "course updated",
      course: updatedCourse,
    });
  } catch (err) {
    next(err);
  }
}

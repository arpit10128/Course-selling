import coursesModel from "../../models/courseModel.js";

export async function createCourse(req, res, next) {
  try {
    const adminId = req.adminId;
    const { title, description, price, imageUrl } =
      req.body;

    if (!title || !description || !price || !imageUrl) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const course = await coursesModel.create({
      title,
      description,
      price,
      imageUrl,
      creatorId: adminId,
    });

    res.status(200).json({
      message: "course created",
      courseId: course._id,
    });
  } catch (err) {
    next(err);
  }
}

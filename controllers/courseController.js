export default async function courses(req, res, next) {
  try {
    const courses = await coursesModel.find({});
    res.status(200).json({
      courses,
    });
  } catch (err) {
    next(err);
  }
}

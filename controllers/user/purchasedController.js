export default async function purchasedController(
  req,
  res,
  next,
) {
  try {
    res.json({
      Message: "purchashed courses are here",
    });
  } catch (err) {
    next(err);
  }
}

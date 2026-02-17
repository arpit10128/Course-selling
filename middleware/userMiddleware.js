import { verifyToken } from "../utils/jwt";

export default function userMiddleware(req, res, next) {
  const token = req.headers.token;

  const decode = verifyToken(
    token,
    process.env.JWT_USER_SECRET,
  );

  if (decode) {
    req.userId = decode.indexOf;
    next();
  } else {
    res.status(403).json({
      message: "You are not login",
    });
  }
}

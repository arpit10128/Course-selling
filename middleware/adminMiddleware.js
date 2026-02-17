import { verifyToken } from "../utils/jwt.js";

export default function adminMiddleware(req, res, next) {
  const token = req.headers.token;

  const decode = verifyToken(
    token,
    process.env.JWT_ADMIN_SECRET,
  );

  if (decode) {
    req.adminId = decode.id;
    next();
  } else {
    res.status(403).json({
      message: "You are not login",
    });
  }
}

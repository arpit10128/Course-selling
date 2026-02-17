import jwt from "jsonwebtoken";

export function generateToken(userId, secret) {
  return jwt.sign(
    {
      userId,
    },
    secret,
  );
}

export function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

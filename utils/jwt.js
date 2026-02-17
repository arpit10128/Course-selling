import jwt from "jsonwebtoken";

export function generateToken(userId, secret) {
  return jwt.sign(
    {
      id: userId,
    },
    secret,
  );
}

export function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

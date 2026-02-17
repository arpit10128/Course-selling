import dotenv from "dotenv";
dotenv.config();

const requiredVars = [
  "JWT_USER_SECRET",
  "JWT_ADMIN_SECRET",
  "MONGO_URL",
];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new error(`Missing env variable ${key}`);
  }
});

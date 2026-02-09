import "./config/env.js";
import connectDB from "./config/db.js";
import app from "./app.js";

const PORT = 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

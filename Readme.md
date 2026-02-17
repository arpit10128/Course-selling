🚀 Course Selling App – Backend API

A scalable backend API for a course marketplace platform built with Node.js, Express, MongoDB, and JWT authentication.

Designed with clean architecture, role-based access control, and secure route protection.

📌 Overview

This project is a backend system that allows:

👨‍💼 Admins to create and manage courses

👤 Users to browse and purchase courses

🔐 Secure authentication using JWT

🧩 Proper route separation and middleware structure

The system follows RESTful API design and clean folder organization.

🏗️ Architecture & Folder Structure

course-selling-app/
│
├── controllers/
│ ├── admin/
│ ├── user/
│
├── middleware/
│ ├── adminMiddleware.js
│ ├── userMiddleware.js
│
├── models/
│ ├── adminModel.js
│ ├── userModel.js
│ ├── courseModel.js
│ ├── purchaseModel.js
│
├── routes/
│ ├── adminRoutes.js
│ ├── userRoutes.js
│
├── utils/
│ └── jwt.js
│
├── app.js
└── .env

🔎 Design Highlights

Separation of concerns (Routes → Controllers → Models)

Role-based middleware

RESTful route structure

Ownership validation for course updates/deletes

Modular and scalable structure

🛠️ Tech Stack

Technology Purpose
Node.js Runtime
Express.js Backend Framework
MongoDB Database
Mongoose ODM
JWT Authentication
dotenv Environment config

🔐 Authentication & Authorization

JWT issued on login/signup

Middleware verifies token

Separate adminMiddleware and userMiddleware

Admin can only update/delete their own courses

📡 API Endpoints

👨‍💼 Admin Routes

Method Endpoint Description
POST /admin/signup Register new admin
POST /admin/login Login admin
POST /admin/courses Create course
PUT /admin/courses/:courseId Update course
DELETE /admin/courses/:courseId Delete course

👤 User Routes

Method Endpoint Description
POST /user/signup Register user
POST /user/login Login user
GET /user/courses View all courses
POST /user/purchase Purchase a course
GET /user/purchased View purchased courses

⚙️ Local Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/course-selling-app.git
cd course-selling-app

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

4️⃣ Run the Server
npm start

Server runs at:

http://localhost:5000

🧠 What I Implemented

✔ Admin & User authentication
✔ JWT token generation & verification
✔ Protected routes
✔ CRUD operations for courses
✔ Ownership validation logic
✔ Purchase system
✔ Clean folder restructuring
✔ RESTful route improvements

🔮 Planned Improvements

Payment gateway integration

Course content upload (videos, modules)

Pagination & filtering

Rate limiting

API documentation (Swagger)

Deployment (Render / AWS / Railway)

Docker support

📈 Project Status

🟢 Core backend complete
🟡 Scaling & production features pending

👨‍💻 Author

Arpit Saraswat
Backend Developer | System Design Enthusiast

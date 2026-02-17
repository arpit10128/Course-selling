# Course Selling App – Backend API

A RESTful backend API for a course marketplace platform built using Node.js, Express, MongoDB, and JWT authentication.

---

## Overview

This project allows:

- Admins to create, update, and delete courses
- Users to browse and purchase courses
- Secure authentication using JWT
- Role-based route protection using middleware

The architecture follows clean separation of concerns:
Routes → Controllers → Models → Middleware

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- dotenv

---

## Features Implemented

### Admin

- Signup & Login
- Create Course
- Update Course
- Delete Course
- Ownership validation (Admin can modify only their own courses)
- Protected routes using admin middleware

### User

- Signup & Login
- View all courses
- Purchase course
- View purchased courses
- Protected routes using user middleware

---

## Folder Structure

course-selling-app/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
└── .env

---

## API Endpoints

### Admin Routes

POST /admin/signup  
POST /admin/login  
POST /admin/courses  
PUT /admin/courses/:courseId  
DELETE /admin/courses/:courseId

### User Routes

POST /user/signup  
POST /user/login  
GET /user/courses  
POST /user/purchase  
GET /user/purchased

---

## Setup Instructions

1. Clone the repository

git clone https://github.com/your-username/course-selling-app.git  
cd course-selling-app

2. Install dependencies

npm install

3. Create .env file

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key

4. Start the server

npm start

Server runs at:
http://localhost:5000

---

## Current Status

- Authentication working
- Admin CRUD operations working
- Purchase system implemented
- JWT-based authorization implemented

---

## Future Improvements

- Payment integration
- Course content management
- Pagination & filtering
- Deployment
- API documentation

---

Author: Arpit Saraswat

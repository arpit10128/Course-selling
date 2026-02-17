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
- View purchased courses
- Protected routes using user middleware

---

## Folder Structure

```
course-selling-app/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
├── server.js
└── .env
```

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

## Current Status

- Authentication working
- Admin CRUD operations working
- JWT-based authorization implemented

---

## Future Improvements

- Purchase course (user feature)
- Payment integration
- Course content management
- Pagination & filtering
- Deployment
- API documentation

---

Author: Arpit Saraswat

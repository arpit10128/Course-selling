## Day-01 (09/02/26)

## ✅ Progress Update

### Authentication & User Management

- Created a **User schema** for handling user data
- Set up **database connection** and successfully storing users
- Implemented **JWT-based authentication**
  - User **signup** with hashed passwords
  - User **login** with token generation
- Added reusable utility functions:
  - `utils/jwt.js` → token generation & verification
  - `utils/hash.js` → password hashing & comparison

✔️ Users can now securely sign up and log in using JWT authentication.

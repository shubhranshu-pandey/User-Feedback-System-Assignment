# User-Feedback-System-Assignment

# For Lia Plus the Software Development Role 
=======
# Lia Feedback Application
>>>>>>> Done

## Overview
This is a full-stack feedback application with a React frontend and a Node.js/Express/MongoDB backend. Users can submit feedback and view all feedbacks in a dashboard.

---

## 1. Project Structure

```
Project for Lia/
  backend/        # Node.js/Express/MongoDB backend
  frontend/       # React frontend
```

---

## 2. Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)
- MongoDB (local or Atlas)

---

## 3. Setup Instructions

### Backend
1. Open a terminal and navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGO_URI=mongodb://localhost:27017/your-db-name
   PORT=5050
   ```
   Replace `your-db-name` with your desired MongoDB database name.
4. Start MongoDB (if not already running):
   ```sh
   brew services start mongodb-community
   # or
   mongod
   ```
5. Start the backend server:
   ```sh
   npm start
   ```
   You should see:
   - `Server running on port 5050`
   - `MongoDB connected`

### Frontend
1. Open a new terminal and navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend React app:
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

---

## 4. Usage
- Go to [http://localhost:3000](http://localhost:3000)
- Submit feedback using the form.
- View all feedbacks in the dashboard tab.

---

## 5. Troubleshooting
- If you see `Error submitting feedback`, check:
  - The backend is running and connected to MongoDB.
  - The API URL in `frontend/src/services/api.js` matches the backend port (default: 5050).
  - All required fields are filled in the form.
  - MongoDB is running.
- Check backend terminal for detailed error logs.

---

## 6. Architecture & Flow
<<<<<<< HEAD
See `ARCHITECTURE.md` for a brief on the architecture and flow. 
=======
See `ARCHITECTURE.md` for a brief on the architecture and flow. 
>>>>>>> Done

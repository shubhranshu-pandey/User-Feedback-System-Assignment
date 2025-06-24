# Architecture & Flow

## Overview
This application is a full-stack feedback system with a React frontend and a Node.js/Express backend connected to MongoDB.

---

## Components

### 1. Frontend (React)
- **Location:** `frontend/`
- **Main files:**
  - `src/App.js`: Main app with tabs for feedback form and dashboard.
  - `src/components/FeedbackForm.js`: Form to submit feedback (name, email, feedback).
  - `src/components/FeedbackDashboard.js`: Displays all feedbacks, allows filtering and sorting.
  - `src/services/api.js`: Handles API requests to the backend.

### 2. Backend (Node.js/Express)
- **Location:** `backend/`
- **Main files:**
  - `server.js`: Entry point, sets up Express, CORS, MongoDB connection, and routes.
  - `routes/feedbackRoutes.js`: Handles `/feedback` POST (submit) and GET (list) endpoints.
  - `models/Feedback.js`: Mongoose schema/model for feedback documents.

### 3. Database (MongoDB)
- Stores feedback documents with fields: name, email, feedback, timestamp.

---

## Flow

1. **User submits feedback** via the form in the frontend.
2. **Frontend** sends a POST request to `/feedback` on the backend.
3. **Backend** validates and saves the feedback to MongoDB.
4. **User views dashboard** in the frontend, which sends a GET request to `/feedback`.
5. **Backend** returns all feedbacks (optionally filtered/sorted), which are displayed in the dashboard.

---

## Error Handling
- All errors in backend routes are logged to the console and return a generic 500 error to the frontend.
- The frontend displays a user-friendly error message if submission fails.

---

## Security & CORS
- Backend only allows requests from `http://localhost:3000` (the frontend).
- All form fields are required and validated on both frontend and backend.

---

## Extensibility
- You can add authentication, more fields, or admin features as needed.
- The API and frontend are modular and easy to extend. 
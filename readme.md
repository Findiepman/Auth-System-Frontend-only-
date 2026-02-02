Good Habit Tracker — Frontend Auth Demo
🔹 Project Overview

Good Habit Tracker is a frontend-only authentication demo that showcases a realistic auth flow without a backend.
This project demonstrates:

Login & Register flows

Session management (stay logged in on refresh)

Protected pages & route guards

Clean, modular project architecture

Note: This project is for demonstration purposes only — all user data is stored locally in localStorage.

🛠️ Features
Authentication

Login and Register (username + password)

Form validation

User and session stored in localStorage

Session Management

Sessions persist on page refresh

Logout button removes the session

Protected Pages

Dashboard & Settings pages

Redirect to login if user is not authenticated

Modular Architecture

auth/ — login, logout, session logic

pages/ — page controllers

storage/ — localStorage abstraction

ui/ — reusable UI components (inputs, forms, toasts)

utils/ — pure helper functions (validation, time, etc.)

🧩 Folder Structure
src/
├─ auth/
├─ storage/
├─ pages/
├─ ui/
├─ utils/
└─ main.ts

⚠️ Important Notes

Passwords are stored in plain text (for demo purposes only)

No backend, no real security

This project is only intended to demonstrate app flow and architecture

💡 Why This is Portfolio-Worthy

Shows understanding of state management and user flows

Demonstrates ability to structure a frontend application

Recruiters can see that you think beyond basic todo or weather apps

📖 How I Would Do This in Production

Hash passwords and store them securely on a backend

Use secure sessions or JWT tokens

Backend API for authentication and role-based access

HTTPS and secure cookies

OAuth / third-party login options

🚀 Usage

Clone this repository

Open index.html or any page in a browser

Register an account → Login → Access dashboard

Logout to clear the session
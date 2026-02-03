# Frontend Authentication System (No Backend)

This project is a **frontend-only authentication system** built to demonstrate how authentication flows work in real-world applications — without using a backend.

The focus is on **architecture, state management, user flows, and session logic**, not on real security or databases.

---

## 🚀 Features

- User registration (username + password)
- User login & logout
- Persistent login using `localStorage`
- Session management
- Protected routes (route guards)
- Automatic session expiration after inactivity
- Session keep-alive based on user activity
- Welcome message using the logged-in user
- Clean separation of concerns (auth, state, storage, pages)

---

## 🧠 Core Concepts Demonstrated

This project shows understanding of:

- Authentication flow (register → login → session → logout)
- Global application state
- Session lifecycle & expiration
- Protected pages & redirects
- Frontend-only route guarding
- User inactivity tracking
- App structure & scalability

---

## 📁 Project Structure

- src/
├─ auth/
│ ├─ auth.ts // register, login, logout
│ ├─ guard.ts // requireAuth
│ ├─ activity.ts // session keep-alive
│ └─ types.ts
├─ pages/
│ ├─ login.ts
│ ├─ register.ts
│ └─ dashboard.ts
├─ state/
│ └─ state.ts // global app state
├─ storage/
│ └─ storage.ts // localStorage helpers
└─ main.ts


---

## 🔐 Authentication Logic (How It Works)

### Register
- Validates input
- Checks for duplicate usernames
- Stores users in `localStorage`

### Login
- Validates credentials
- Creates a session object
- Persists session in `localStorage`

### Session
```ts
interface Session {
  userId: string
  createdAt: number
}

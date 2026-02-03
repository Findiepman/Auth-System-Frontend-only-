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


├─ .gitignore
├─ .gitattributes
├─ dashboard.html
├─ login.html
├─ register.html
├─ styles.css
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ README.md
└─ src/
├─ auth/
│ ├─ auth.ts // register, login, logout logic
│ ├─ guard.ts // requireAuth route guard
│ ├─ activity.ts // session keep-alive on user activity
│ └─ types.ts // auth-related TypeScript types
│
├─ pages/
│ ├─ login.ts // login page logic
│ ├─ register.ts // register page logic
│ └─ dashboard.ts // dashboard logic
│
└─ storage/
└─ storage.ts // localStorage helper functions


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
---

## 🛡️ Route Protection

Protected pages (such as `dashboard.html`) use a route guard:

- If no valid session exists → redirect to `login.html`
- Auth checks run on page load
- Session expiry is continuously monitored

---

## 🚧 Important Disclaimer

⚠️ This project does **not** implement real security.

- Passwords are stored in plain text
- No encryption or hashing
- No backend or database
- No OAuth or JWT

This is intentional and done for learning and portfolio demonstration purposes.

---

## 🏗️ How This Would Work in Production

In a production environment, this system would be replaced with:

- A backend API
- Secure password hashing
- JWT or session-based authentication
- HTTP-only cookies
- Server-side authorization

---

## 📌 Tech Stack

- TypeScript
- HTML & CSS
- Browser APIs (`localStorage`)
- Vanilla JavaScript (no frameworks)
- Frontend only

---

## 📄 License

This project is intended for educational and portfolio use.
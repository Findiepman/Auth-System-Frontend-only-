import { loadFromStorage, removeFromStorage } from "../storage/storage.js";
import { state } from "../state.js";
import { sessionCheck } from "./auth.js";

export function requireAuth() {
    const session: any = loadFromStorage('session')

    if (!sessionCheck(session)) {
        removeFromStorage('session')
        window.location.href = "/login.html"
    }

    if (!session) {
        window.location.href = "/login.html"
    }

    const currentUser = state.users.find(user => user.id === session.userId)

    if (currentUser) {
        const usernameEl = document.getElementById("username-display")
        if (usernameEl) usernameEl.textContent = currentUser.username
    }
}
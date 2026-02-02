import { loadFromStorage } from "../storage/storage.js";
import { state } from "../state.js";

export function requireAuth() {
    const session: any = loadFromStorage('session')

    if (!session) {
        window.location.href = "/login.html"
    }

    const currentUser = state.users.find(user => user.id === session.userId)

    if (currentUser) {
        const usernameEl = document.getElementById("username-display")
        if (usernameEl) usernameEl.textContent = currentUser.username
    }
}
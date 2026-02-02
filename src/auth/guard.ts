import { loadFromStorage } from "../storage/storage";
import { state } from "../state";

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
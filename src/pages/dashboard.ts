import { requireAuth } from "../auth/guard.js";
import { logoutUser } from "../auth/auth.js";
import { loadFromStorage, removeFromStorage } from "../storage/storage.js"
import { sessionCheck } from "../auth/auth.js";
import { StartActivityWatcher } from "../auth/activity.js";
requireAuth();
StartActivityWatcher();

const logoutBtn = document.getElementById("logout-btn")! as HTMLButtonElement
logoutBtn.addEventListener("click", () => {
    logoutUser();
})


const CHECK_INTERVAL = 10 * 1000 // elke 10 seconden

setInterval(() => {
    const session: any = loadFromStorage("session")

    if (!sessionCheck(session)) {
        removeFromStorage("session")
        window.location.href = "/login.html"
    }
}, CHECK_INTERVAL)
import { requireAuth } from "../auth/guard.js";
import { logoutUser } from "../auth/auth.js";
requireAuth();

const logoutBtn = document.getElementById("logout-btn")! as HTMLButtonElement
logoutBtn.addEventListener("click", () => {
    logoutUser();
})
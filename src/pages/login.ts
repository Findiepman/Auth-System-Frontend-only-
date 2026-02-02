import { loginUser } from "../auth/auth.js";

const form = document.getElementById("login-form") as HTMLFormElement
const usernameInput = document.getElementById("username") as HTMLInputElement
const passwordInput = document.getElementById("password") as HTMLInputElement

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const result = loginUser(usernameInput.value, passwordInput.value)

        if (result === "Succesfully logged in") {
            window.location.href = "/dashboard.html"
        }
        else { alert(result) }
    })
}
else {console.log("efwef")}
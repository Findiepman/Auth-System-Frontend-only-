import { registerUser } from "../auth/auth.js";

const passwordInput = document.getElementById("password")! as HTMLInputElement
const usernameInput = document.getElementById("username")! as HTMLInputElement
const form = document.getElementById("register-form")! as HTMLFormElement


if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        const result = registerUser(usernameInput.value, passwordInput.value)

        if (result === "Register succesful") window.location.href = "/dashboard.html"
        else alert(result)
    })
}


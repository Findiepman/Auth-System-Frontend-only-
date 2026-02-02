import { loadFromStorage, saveToStorage, removeFromStorage } from "../storage/storage.js";
import { User, Session } from "./types.js";
import { state } from "../state";

export function registerUser(username: string, password: string) {
    const existingUser = state.users.find(user => user.username === username.toLowerCase());
    if (!existingUser && username && password) {
        const newUser = {
            username: username.toLowerCase(),
            password: password,
            id: Date.now().toString()
        }
        state.users.push(newUser)
        saveToStorage('users', state.users)
    }
}

export function loginUser(username: string, password: string) {
    if (username.trim() !== "" && password.trim() !== "") {
        const existingUser = state.users.find(user => user.username === username.toLowerCase())
        if (!existingUser) {
            return 'invalid username';
        }
        else if (existingUser.password !== password) {
            return 'invalid password'
        }
        else {
            state.session = {userId: existingUser.id, createdAt: Date.now()}
            saveToStorage('session', state.session)
            return 'Succesfully logged in'
        }
    }
    return 'empty fields'
}
function logoutUser() {
    state.session = null
    removeFromStorage('session')
    window.location.href="/login.html"
}
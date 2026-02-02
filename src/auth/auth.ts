import { saveToStorage, removeFromStorage } from "../storage/storage.js";
import { Session } from "./types.js";
import { state } from "../state.js";

export function registerUser(username: string, password: string) {
    username = username.trim()
    password = password.trim()
    if (!username || !password) {
        return "One or more fields is empty!"
    }

    const existingUser = state.users.find(user => user.username === username.toLowerCase());

    if (existingUser) {
        return "This username is already taken!"
    }


    const newUser = {
        username: username.toLowerCase(),
        password: password,
        id: Date.now().toString()
    }
    state.users.push(newUser)

    saveToStorage('users', state.users)
    state.session = {userId: newUser.id, createdAt: Date.now()}
    saveToStorage('session', state.session)
    return "Register succesful"




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
            state.session = { userId: existingUser.id, createdAt: Date.now() }
            saveToStorage('session', state.session)
            return 'Succesfully logged in'
        }
    }
    return 'empty fields'
}
export function logoutUser() {
    state.session = null
    removeFromStorage('session')
    window.location.href = "/login.html"
}

export function sessionCheck(session: Session | null) {
    if (!session) {
        return false
    }
    const hour = 60 * 60 * 1000
    const isExpired = Date.now() - session.createdAt > hour

    if (isExpired) {
        return false
    }
    return true
}
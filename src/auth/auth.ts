import { loadFromStorage, saveToStorage, removeFromStorage } from "../storage/storage";
import { User, Session } from "./types";
import { state } from "../state";

function registerUser(username: string, password: string) {
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

function loginUser(username: string, password: string) {
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
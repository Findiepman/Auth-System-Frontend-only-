import { loadFromStorage, saveToStorage } from "../storage/storage.js";
import { Session } from "./types.js";

export function StartActivityWatcher() {
    const events = ["mousemove", "keydown", "scroll", "click"]

    const updateSession = () => {
        const session: any = loadFromStorage<Session>("session")
        if (session) {
            session.createdAt = Date.now();
            saveToStorage('session', session)
        }
    }
    events.forEach(event => {
        window.addEventListener(event, updateSession)
    })
}
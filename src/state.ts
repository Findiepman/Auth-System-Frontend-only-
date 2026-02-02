import { loadFromStorage } from "./storage/storage.js";

// src/state.ts
export interface User {
  id: string;
  username: string;
  password: string;
}

export interface Session {
  userId: string;
  createdAt: number;
}

export const state: { users: User[], session: { userId: string, createdAt: number } | null } = {
    users: loadFromStorage<User[]>("users") || [],
    session: loadFromStorage("session") || null
}

// Helper (conceptueel) om state te syncen met localStorage
export const persistUsers = () => { /* save state.users naar localStorage */ };
export const persistSession = () => { /* save state.session naar localStorage */ };
export const loadStateFromStorage = () => { /* haal users + session op van localStorage */ };

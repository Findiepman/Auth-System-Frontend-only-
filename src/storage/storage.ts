export function saveToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) as T : null;
}

export function removeFromStorage(key: string) {
  localStorage.removeItem(key);
}

// Store data in local storage
export const setLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Clear local storage
export const clearLocalStorage = (): void => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

// Get data from local storage
export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    // Access localStorage here

    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

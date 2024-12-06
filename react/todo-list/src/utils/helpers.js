export const clearStorage = (key) => {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};

export const getFromStorage = (key) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

export const saveToStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export function stringToHash(string) {
  let hash = 0;

  if (string.length === 0) return hash;

  for (const char of string) {
      hash ^= char.charCodeAt(0); // Bitwise XOR operation
  }

  return hash;
}
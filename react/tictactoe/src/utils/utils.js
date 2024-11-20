export const clearStorage = (key) => {
  if (key) {
    sessionStorage.removeItem(key);
  } else {
    sessionStorage.clear();
  }
};

export const getFromStorage = (key) => {
  const item = window.sessionStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

export const saveToStorage = (key, item) => {
  window.sessionStorage.setItem(key, JSON.stringify(item));
};

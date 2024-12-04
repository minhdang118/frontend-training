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
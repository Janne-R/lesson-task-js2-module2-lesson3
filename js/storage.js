export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));

}

export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
}
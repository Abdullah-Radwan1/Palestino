export const getItemFromLocalStorage = (key: string, defaultValue: any) => {
 if (typeof localStorage !== "undefined") {
  const storedItem = localStorage.getItem(key)
  return storedItem !== null ? JSON.parse(storedItem) : defaultValue
 }
 return defaultValue
}

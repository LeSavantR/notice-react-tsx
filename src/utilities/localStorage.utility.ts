const setLocalStorage = <T> (key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const persistLocalStorage = <T> (key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({...value}))
}

const tryGet = (key: string) => {
  if (localStorage.getItem(key) !== null) return true
  return false
}

const getLocalStorageData = <T> (key:  string, initialStateData: T) => {
  if(tryGet(key)) {
    return JSON.parse(localStorage.getItem(key) as string) as T
  } else {
    setLocalStorage<T>(key, initialStateData)
    return JSON.parse(localStorage.getItem(key) as string) as T
  }
}

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export {
  getLocalStorageData, persistLocalStorage,
  removeLocalStorage, setLocalStorage
}


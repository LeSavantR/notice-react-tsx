import { TokenModel } from "@/models"

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const persistLocalStorage = <T> (key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({...value}))
}

const getLocalStorage = (key: string) => {
  const get = localStorage.getItem(key)
  if (!get) {
    return undefined
  } else {
    return JSON.parse(get) as TokenModel
  }
}

const getLocalStorageUser = <T> (key: string, initialValue: T) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) as string) as T
  } else {
    return initialValue
  }
}

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export { persistLocalStorage, removeLocalStorage, getLocalStorageUser }

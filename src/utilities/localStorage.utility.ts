import { TokenModel } from "@/models"

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key: string) => {
  const get = localStorage.getItem(key)
  if (!get) {
    return undefined
  } else {
    return JSON.parse(get) as TokenModel
  }
}

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export { setLocalStorage, getLocalStorage, removeLocalStorage }

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
  const get = localStorage.getItem(key)
  if (!get) {
    return null
  } else {
    return get
  }
}

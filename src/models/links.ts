const BASE_URL = 'http://localhost:8000/api/'
const NOTICIAS = 'noticia/'

export const noticiaLinks = (id?: string | undefined) => {
  if (id === undefined) return `${BASE_URL}${NOTICIAS}`
  return `${BASE_URL}${NOTICIAS}${id}/`
}

export enum AuthLinks {
  LOGIN = `${BASE_URL}token/`,
  REFRESH = `${BASE_URL}token/refresh/`
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  OPTIONS = 'OPTIONS',
  DELETE = 'DELETE'
}

export enum HeadersTypes {
  CONTENT_TYPE_VALUE = 'application/json',
}

export const authorization = (token: string) => `Bearer ${token}`

export const InitialAuthToken = {
  access: '',
  refresh: ''
}
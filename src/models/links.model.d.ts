const BASE_URL = 'http://localhost:8000/api/'
const VERSION = 'v1/'
const NOTICIAS = 'noticia/'

const noticiaLinks = (id?: string | undefined) => {
  if (id === undefined) return `${BASE_URL}${VERSION}${NOTICIAS}`
  return `${BASE_URL}${VERSION}${NOTICIAS}${id}/`
}

const AuthLinks = {
  LOGIN:`${BASE_URL}token/`,
  REFRESH:`${BASE_URL}token/refresh/`
}

enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  OPTIONS = 'OPTIONS',
  DELETE = 'DELETE'
}

enum HeadersTypes {
  CONTENT_TYPE_VALUE = 'application/json',
}

const authorization = (token: string) => `Bearer ${token}`

const InitialAuthToken = {
  access: '',
  refresh: ''
}

export {
  noticiaLinks, AuthLinks,
  RequestMethod, HeadersTypes,
  authorization, InitialAuthToken
}

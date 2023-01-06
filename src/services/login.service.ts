import { AuthLinks, ContextTypes, TokenModel, UserCredentials } from "@/models"
import { setLocalStorage } from "@/utilities"
import axios from "axios"

type LoginState = UserCredentials | undefined

export const getLoginService = async (credentials: LoginState) => {
  if (!credentials) return undefined
  const { data, status } = await axios.post(AuthLinks.LOGIN, credentials)
  if (status === 200 ) setLocalStorage(ContextTypes.AUTHUSER, data)
  return await data as TokenModel
}

export const getRefreshToken = async ({ access, refresh}:TokenModel) => {
  const { data, status } = await axios.post(AuthLinks.REFRESH, { refresh })
  if (status === 200) setLocalStorage(ContextTypes.AUTHUSER, data)
  return await data as TokenModel
}

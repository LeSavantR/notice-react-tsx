import { UserCredentials, AuthLinks, TokenModel } from "@/models"
import axios from "axios"

export const getLoginService = async (credentials: UserCredentials) => {
  const request = await axios.post(AuthLinks.LOGIN, credentials)
  return await request.data as TokenModel
}

export const getRefreshToken = async ({ access, refresh}:TokenModel) => {
  const request = await axios.post(AuthLinks.REFRESH, { refresh })
  return await request.data as TokenModel
}
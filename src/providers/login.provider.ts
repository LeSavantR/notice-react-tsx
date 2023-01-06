import { UserCredentials, userContextType } from "@/models"
import { getLoginService } from "@/services/login.service"
import { decodeTokenAdapter } from "@/utilities"


const LoginProvided = (credentials: UserCredentials, { setUser }: userContextType) => {
  const logging = async () => {
    try {
      const token = await getLoginService(credentials)
      const userLogged = decodeTokenAdapter(token)
      setUser(userLogged)
      return true
    } catch (error) {
      setUser(undefined)
      return false
    }
  }
  return logging()
}

export { LoginProvided }

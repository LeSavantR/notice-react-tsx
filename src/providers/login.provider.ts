import { useContext } from 'react';
import { UserCredentials, userContextType } from "@/models"
import { getLoginService } from "@/services"
import { decodeTokenAdapter } from "@/utilities"
import { userContext } from './user.provider';


const LoginProvided = (credentials: UserCredentials, { setUser }: userContextType) => {

  const { setError, setLoading, setErrorMessage } = useContext(userContext) as userContextType

  const logging = async () => {
    setLoading(true)
    try {
      const token = await getLoginService(credentials)
      const userLogged = decodeTokenAdapter(token)
      setUser(userLogged)
      setLoading(false)
      return true
    } catch (error) {
      setUser(undefined)
      setError(true)
      setErrorMessage(`${error}`)
      setLoading(false)
      return false
    }
  }
  return logging()
}

export { LoginProvided }

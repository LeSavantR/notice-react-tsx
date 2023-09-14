import { useContext } from 'react';
import { UserCredentials, UserPayloadModel, initialStateUserPayloadModel } from "@/models"
import { getLoginService } from "@/services"
import { decodeTokenAdapter } from "@/utilities"
import { userContext } from './user.provider';


const LoginProvided = (credentials: UserCredentials) => {

  const { setError, setUser, setLoading, setErrorMessage } = useContext(userContext)

  const logging = async () => {
    setLoading(true)
    const token = await getLoginService(credentials)
    if (token.access !== '') {
      const userLogged = decodeTokenAdapter(token)
      setUser(userLogged)
      setLoading(false)
      return true
    } else {
      setUser(initialStateUserPayloadModel)
      setError(true)
      setErrorMessage(`Sin Acceso`)
      setLoading(false)
      return false
    }
  }
  return logging()
}

export { LoginProvided }

import { TokenModel, UserPayloadModel } from "@/models"
import { createContext } from "react"

export interface AuthContextInterface {
  user?: UserPayloadModel | undefined
  authToken?: TokenModel
}

const AuthContext = createContext<AuthContextInterface>({})

export { AuthContext }

import { createContext } from "react"

export interface AuthContextInterface {
  username?: string
  access?: {
    token?: string
    refresh?: string
  }
  loginUser?: any
}

const AuthContext = createContext<AuthContextInterface>({})

export { AuthContext }

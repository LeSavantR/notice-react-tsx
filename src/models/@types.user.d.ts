interface userContextType {
  user: UserPayloadModel | undefined
  setUser: (user: UserPayloadModel | undefined) => void
  loading: boolean
  setLoading: (state: boolean) => void
  error: boolean
  setError: (state: boolean) => void
  errorMessage: string
  setErrorMessage: (text: string) => void
}

interface TokenModel {
  access: string
  refresh: string
}

interface TokenDecodeModel {
  token_type: string
  exp: number
  iat: number
  jti: string
  user_id: string
  email: string
  nombre_completo: string
  is_staff: boolean
}

interface UserPayloadModel {
  access: string
  refresh: string
  email: string
  nombre_completo: string
  is_staff: boolean
}

interface UserCredentials {
  email: string
  password: string
}


export {
  userContextType, TokenModel,
  TokenDecodeModel, UserPayloadModel,
  UserCredentials
}

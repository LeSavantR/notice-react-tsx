export interface TokenModel {
  access: string
  refresh: string
}

export interface TokenDecodeModel {
  token_type: string
  exp: number
  iat: number
  jti: string
  user_id: string
  email: string
  nombre_completo: string
}

export interface UserPayloadModel {
  email: string
  nombre_completo: string
}

export interface UserCredentials {
  email: string
  password: string
}
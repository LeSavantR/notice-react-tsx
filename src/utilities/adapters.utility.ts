import jwtDecode from "jwt-decode"

import { TokenModel } from '@/models'
import { TokenDecodeModel, UserPayloadModel } from "@/models"

const decodeTokenAdapter = (decode: TokenModel | undefined) => {
  // Separar este interceptor
  if (decode === undefined) return undefined
  const tokenDecode: TokenDecodeModel = jwtDecode(decode?.access)

  const { access, refresh } = decode

  // Esto es solo el Adaptador
  const decodedToken: UserPayloadModel = {
    email: tokenDecode.email,
    nombre_completo: tokenDecode.nombre_completo,
    access, refresh
  }
  return decodedToken
}

export { decodeTokenAdapter }

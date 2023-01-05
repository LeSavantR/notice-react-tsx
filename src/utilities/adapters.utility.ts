import { TokenDecodeModel, UserPayloadModel } from "@/models/user.model";
import jwtDecode from "jwt-decode";

export const decodeTokenAdapter = (token: string) => {
  // Separar este interceptor
  const tokenDecode: TokenDecodeModel = jwtDecode(token)

  // Esto es solo el Adaptador
  const decodedToken: UserPayloadModel = {
    email: tokenDecode.email,
    nombre_completo: tokenDecode.nombre_completo
  }
  return decodedToken
}


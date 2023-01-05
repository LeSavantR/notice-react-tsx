import React, { useState, useEffect } from "react"
import { AuthContext } from "./AuthContext"
import { InitialAuthToken, UserPayloadModel } from "@/models"
import { loginService } from "@/Providers"
import { decodeTokenAdapter } from "@/utilities"


export interface AuthProviderInterface {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderInterface> = ({children}) => {
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  const [ authToken, setAuthToken ] = useState(InitialAuthToken)
  const [ user, setUser ] = useState<UserPayloadModel>()

  useEffect(() => {
    const loginUser = async () => {
      const { access, refresh } = await loginService({setError, setLoading})
      setUser(decodeTokenAdapter(access))
      setAuthToken({ access, refresh })
    }
    loginUser()
  }, [])

  const contextData = {
    authToken,
    error,
    loading,
    user,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
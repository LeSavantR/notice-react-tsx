import React, { useState, useEffect } from "react"
import { AuthContext, AuthContextInterface } from "./AuthContext"


export interface AuthProviderInterface {
  children?: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderInterface> = ({children}) => {
  const [ authToken, setAuthToken ] = useState({})
  const [ user, setUser ] = useState<AuthContextInterface>()

  const loginUser = async ({ username, password}: any) => {
    const req = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })

    const data = await req.json()
    if (req.status === 200) {
      setAuthToken(data)
      setUser(data.access)
    } else {
      console.log('Something went Wrong')
    }
    console.log(data)
  }

  const contextData = {
    loginUser,
    access: authToken
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
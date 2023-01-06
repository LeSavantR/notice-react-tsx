import React, { useState } from 'react'
import { UserPayloadModel } from '@/models'
import { userContext } from '@/context'

interface UserProviderInterface {
  children: React.ReactNode
}

const UserProvider: React.FC<UserProviderInterface> = ({ children }) => {
  const [ user, setUser ] = useState<UserPayloadModel | undefined>(undefined)
  const [ error, setError ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ loading, setLoading ] = useState(true)
  const contextValue = {
    user, setUser,
    error, setError,
    errorMessage, setErrorMessage,
    loading, setLoading
  }
  return (
    <userContext.Provider value={contextValue}>
      { children }
    </userContext.Provider>
  )
}

export { UserProvider, userContext }

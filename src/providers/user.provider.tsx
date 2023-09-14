import React from 'react'
import { UserPayloadModel, initialStateUserPayloadModel, userContextType } from '@/models'
import { userContext } from '@/context'

interface UserProviderInterface {
  children: React.ReactNode
}

let initialUser: userContextType

const UserProvider: React.FC<UserProviderInterface> = ({ children }) => {
  const initialUserProvider = () => {
    const [user, setUser] = React.useState<UserPayloadModel>(initialStateUserPayloadModel)
    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [isLogged, setIsLogged] = React.useState(false)

    const contextValue: userContextType = {
      user, setUser,
      isLogged, setIsLogged,
      error, setError,
      errorMessage, setErrorMessage,
      loading, setLoading
    }
    return contextValue
  }

  const values = initialUserProvider()
  initialUser = values
  return (
    <userContext.Provider value={values}>
      { children }
    </userContext.Provider>
  )
}

export { UserProvider, userContext, initialUser }

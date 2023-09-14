import React from 'react'
import { Navigate } from 'react-router-dom'

export interface RequiredAuthInterface {
  children: React.ReactNode
  isLogged: boolean
}

const RequiredAuth: React.FC<RequiredAuthInterface> = ({ children, isLogged }) => {
  if (!isLogged) {
    return (
      <Navigate to={'/login'} replace />
    )
  }
  return (
    <>
      {children}
    </>
  )
}

export default RequiredAuth;

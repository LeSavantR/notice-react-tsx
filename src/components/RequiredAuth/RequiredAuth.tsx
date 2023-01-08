import { UserPayloadModel } from '@/models'
import { Login } from '@/pages'
import React from 'react'
import { Navigate } from 'react-router-dom'

export interface RequiredAuthInterface {
  children: React.ReactNode
  user?: UserPayloadModel
}

const RequiredAuth: React.FC<RequiredAuthInterface> = ({ children, user }) => {
  if (!user) {
    return <Navigate to={'/login'} replace />
  }
  return (
    <>
      {children}
    </>
  )
}

export default RequiredAuth;

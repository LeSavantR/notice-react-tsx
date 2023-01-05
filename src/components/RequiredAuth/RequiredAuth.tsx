import { UserPayloadModel } from '@/models'
import { Login } from '@/pages'
import React from 'react'

export interface RequiredAuthInterface {
  children: React.ReactNode
  user?: UserPayloadModel
}

const RequiredAuth: React.FC<RequiredAuthInterface> = ({ children, user }) => {
  if (!user) {
    return <Login />
  }
  return (
    <>
      {children}
    </>
  )
}

export default RequiredAuth;

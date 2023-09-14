import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface AuthGuardInterface {
  isLogged: boolean
}

const AuthGuard: React.FC<AuthGuardInterface> = ({ isLogged }) => {
  return (
    !!isLogged
      ? <Outlet />
      : <Navigate replace to={'/login'} />
  )
}

export default AuthGuard

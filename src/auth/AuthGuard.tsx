import React from 'react'
import { AppStore } from '@/redux'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

interface AuthGuardInterface {}

const AuthGuard: React.FC<AuthGuardInterface> = () => {
  const userState = useSelector((store: AppStore) => store.user)
  return (
    userState.access
      ? <Outlet />
      : <Navigate replace to={'/login'} />
  )
}

export default AuthGuard

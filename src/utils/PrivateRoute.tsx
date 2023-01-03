import { Route, redirect } from 'react-router-dom'
import { LoginPage } from 'src/pages/LoginPage'

const ProtectedRoute = ({ children, user }: any) => {
  if (!user) {
    return <LoginPage />
  }
  return children
}

export { ProtectedRoute }
import { Route, redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }: any) => {

  const auth = false

  return (
    <Route {... rest}>{children}</Route>
  )
}

export { PrivateRoute }
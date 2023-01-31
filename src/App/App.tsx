import React, { Suspense, lazy, useContext, useEffect } from 'react'
import { Route } from 'react-router-dom'

import { Header, RoutesNotFound } from '@/components'
import { RequiredAuth } from '@/components'
import { decodeTokenAdapter, getLocalStorageUser } from '@/utilities'
import { ContextTypes, TokenModel, userContextType } from '@/models'
import { userContext } from '@/context'
import { EmptyUserState } from '@/redux'
import { AuthGuard } from '@/auth'

const Loading = lazy(() => import('@/components/Loading/Loading'))
const Home = lazy(() => import('@/pages/Home/Home'))
const Login = lazy(() => import('@/pages/Login/Login'))
const Notice = lazy(() => import('@/pages/Notice/Notice'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  const { user, setUser, setLoading } = useContext(userContext) as userContextType
  useEffect(() => {
    setLoading(true)
    const token = getLocalStorageUser<TokenModel>(ContextTypes.AUTHUSER, EmptyUserState)
    if (token) {
      setUser(decodeTokenAdapter(token))
      setLoading(false)
    }
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <RoutesNotFound>
        <Route index path={'/'} element={<RequiredAuth user={user}><Home /></RequiredAuth>} />
        <Route path={'/login'} element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route path={`${noticeRoutes.NOTICE}/*`} element={<Notice />} />
        </Route>
      </RoutesNotFound>
    </Suspense>
  )
}

export default App

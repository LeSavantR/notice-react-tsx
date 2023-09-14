import React, {
  Suspense, lazy, useContext, useEffect
} from 'react'
import { Route } from 'react-router-dom'

import { AuthGuard } from '@/auth'
import {
  Header, RequiredAuth,
  RoutesNotFound
} from '@/components'
import { userContext } from '@/context'
import { ContextTypes, initialStateToken, initialStateUserPayloadModel, noticeRoutes } from '@/models'
import { decodeTokenAdapter, getLocalStorageData } from '@/utilities'

const Loading = lazy(() => import('@/components/Loading/Loading'))
const Home = lazy(() => import('@/pages/Home/Home'))
const Login = lazy(() => import('@/pages/Login/Login'))
const Notice = lazy(() => import('@/pages/Notice/Notice'))

interface AppInterface {}

const App: React.FC<AppInterface> = () => {
  const { setUser, setIsLogged, setLoading, isLogged } = useContext(userContext)
  useEffect(() => {
    setLoading(true)
    setIsLogged(false)
    const token = getLocalStorageData(ContextTypes.AUTHTOKEN, initialStateToken)
    if (token.access !== '') {
      setIsLogged(true)
      setUser(decodeTokenAdapter(token))
      setLoading(false)
    } else {
      setUser(initialStateUserPayloadModel)
      setIsLogged(false)
      setLoading(false)
    }
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <RoutesNotFound>
        <Route index path={'/'} element={<RequiredAuth isLogged={isLogged}><Home /></RequiredAuth>} />
        <Route path={'/login'} element={<Login />} />
        <Route element={<AuthGuard isLogged={isLogged} />}>
          <Route path={`${noticeRoutes.NOTICE}/*`} element={<Notice />} />
        </Route>
      </RoutesNotFound>
    </Suspense>
  )
}

export default App

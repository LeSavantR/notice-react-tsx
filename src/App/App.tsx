import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from '@/components'
import { Home, Login, Error, Notice } from '@/pages'
import { RequiredAuth } from '@/components'
import { decodeTokenAdapter, getLocalStorageUser } from '@/utilities'
import { ContextTypes, TokenModel, userContextType } from '@/models'
import { userContext } from '@/context'
import { EmptyUserState } from '@/redux'

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
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<RequiredAuth user={user}><Home /></RequiredAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/notice/:idNotice' element={<RequiredAuth><Notice /></RequiredAuth>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App

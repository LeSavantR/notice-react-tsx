import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Header } from './components'
import { Home, Login, Error } from './pages'
import { RequiredAuth } from './components/RequiredAuth'
import { decodeTokenAdapter, getLocalStorage } from './utilities'
import { ContextTypes, userContextType } from './models'
import { userContext } from './context'

interface App {}

const App: React.FC<App> = () => {

  const { user, setUser, setLoading } = useContext(userContext) as userContextType

  useEffect(() => {
    setLoading(true)
    const token = getLocalStorage(ContextTypes.AUTHUSER)
    if (token) {
      setUser(decodeTokenAdapter(token))
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<RequiredAuth user={user}><Home /></RequiredAuth> } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App

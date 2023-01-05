import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Header } from './components'
import { Home, Login, Error } from './pages'
import { RequiredAuth } from './components/RequiredAuth'

export interface App {}

const App: React.FC<App> = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<RequiredAuth user={undefined}><Home /></RequiredAuth> } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App

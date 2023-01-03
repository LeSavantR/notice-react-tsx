import React from 'react'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProtectedRoute } from './utils/PrivateRoute'

import './App.css'

export interface App {}

const App: React.FC<App> = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProtectedRoute user={true}><HomePage /></ProtectedRoute> } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

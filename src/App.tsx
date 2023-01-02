import React from 'react'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './components/Header'

import './App.css'

export interface App {}

const App: React.FC<App> = () => {
  return (
    <div className="App">
      <Header />
      <LoginPage />
      {/* <Router>
        <Route element={<HomePage />} path='/' />
        <Route element={<LoginPage />} path='/login' />
      </Router> */}
    </div>
  )
}

export default App

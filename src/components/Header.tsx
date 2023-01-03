import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  const { username } = useContext(AuthContext)
  return (
    <header>
      <Link to='/'>Home</Link>
          <span> | </span>
      {
        !username
          ? <Link to={'/login'}>Login</Link>
          : <Link to={'/logout'}>Logout</Link>
      }
      {
        !!username && <small>Hello {username}!.</small>
      }
    </header>
  )
}

export { Header }
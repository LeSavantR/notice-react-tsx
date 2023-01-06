import { userContext } from '@/context'
import { ContextTypes, userContextType } from '@/models'
import { removeLocalStorage } from '@/utilities'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export interface HeaderInterface {}

const Header : React.FC<HeaderInterface> = () => {
  const { user, setUser, error, errorMessage } = useContext(userContext) as userContextType
  const handleLogout = () => {
    removeLocalStorage(ContextTypes.AUTHUSER)
    setUser(undefined)
  }
  return (
    <header>
      <section>
        {!!user && <p>Hola {user.nombre_completo}!.</p>}
        {!!error && <p>{errorMessage}</p>}
      </section>
      <section>
        <Link to='/'>Home</Link>
        <span> | </span>
        {!user
          ? <Link to={'/login'}>Login</Link>
          : <button onClick={handleLogout}>Logout</button>
        }
      </section>
    </header>
  )
}

export default Header

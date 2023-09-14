import { userContext } from '@/context'
import { ContextTypes, initialStateUserPayloadModel } from '@/models'
import { removeLocalStorage } from '@/utilities'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Header.module.css'

export interface HeaderInterface {}

const Header : React.FC<HeaderInterface> = () => {
  const { user, setUser, error, errorMessage, isLogged, setIsLogged } = useContext(userContext)
  const handleLogout = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    removeLocalStorage(ContextTypes.AUTHTOKEN)
    setUser(initialStateUserPayloadModel)
    setIsLogged(false)
  }
  return (
    <>
      <header className={styles.header}>
        <section>
          {isLogged && <p>Hola {user.nombre_completo}!.</p>}
          {error && <p>{errorMessage}</p>}
        </section>
        <section>
          <Link to='/'>Home</Link>
          <span> | </span>
          {!isLogged
            ? <Link to={'/login'}>Login</Link>
            : <button onClick={handleLogout}>Logout</button>
          }
        </section>
      </header>
      {error && (
        <div className={styles.error}>
          <span className={styles.message}>{errorMessage}</span>
        </div>
      )}
    </>
  )
}

export default Header

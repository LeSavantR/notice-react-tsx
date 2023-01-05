import React, { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'

export interface LoginInterface {}
type EventInput = React.FormEvent<HTMLInputElement>
type Values = {
  username?: string,
  password?: string
}


const Login : React.FC<LoginInterface> = () => {
  const [values, setValues] = useState<Values>({})
  const { username, loginUser } = useContext(AuthContext)

  const handleChange = (event: EventInput) => {
    const { currentTarget } = event
    setValues({ ...values, [currentTarget.name]: currentTarget.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    loginUser({ username: values.username, password: values.password })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.username}
          type="text"
          name='username'
          placeholder='Enter Username'
        />
        <input
          onChange={handleChange}
          value={values.password}
          type="password"
          name='password'
          placeholder='Enter Password'
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Login;

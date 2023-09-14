import React, { useContext, useEffect, useState } from 'react'

import { LoginProvided, userContext } from '@/providers'
import { useNavigate } from 'react-router-dom'

export interface LoginInterface {}
export type EventInput = React.FormEvent<HTMLInputElement>
export type Values = {
  email: string,
  password: string
}


const Login : React.FC<LoginInterface> = () => {

  const [ values, setValues ] = useState<Values>({
    email: '',
    password: ''
  })

  const { isLogged } = useContext(userContext)

  const location = useNavigate()

  const handleChange = ({ currentTarget }: EventInput) => {
    setValues({ ...values, [currentTarget.name]: currentTarget.value })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    LoginProvided(values).then(res => {
      if (res) {location('/')}
    })
  }

  useEffect(() => {
    if (isLogged) {
      location('/')
    }
  }, [isLogged])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.email}
          type="text"
          name='email'
          placeholder='Enter email....'
        />
        <input
          onChange={handleChange}
          value={values.password}
          type="password"
          name='password'
          placeholder='Enter Password....'
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;

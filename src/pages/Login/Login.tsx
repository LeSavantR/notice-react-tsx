import React, { useContext, useState } from 'react'

import { LoginProvided } from '@/providers'
import { userContext } from '@/context'
import { userContextType } from '@/models'

export interface LoginInterface {}
export type EventInput = React.FormEvent<HTMLInputElement>
export type Values = {
  email: string,
  password: string
}


const Login : React.FC<LoginInterface> = () => {
  const context = useContext(userContext) as userContextType
  const [ values, setValues ] = useState<Values>({
    email: '',
    password: ''
  })

  const handleChange = ({ currentTarget }: EventInput) => {
    setValues({ ...values, [currentTarget.name]: currentTarget.value })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    LoginProvided(values, context).then(value => value)
  }

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

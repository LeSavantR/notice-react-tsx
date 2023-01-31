import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Error } from '@/pages'

export interface RoutesNotFoundInterface {
  children: React.ReactNode
}

const RoutesNotFound : React.FC<RoutesNotFoundInterface> = ({ children }) => {
	return (
    <Routes>
      {children}
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default RoutesNotFound

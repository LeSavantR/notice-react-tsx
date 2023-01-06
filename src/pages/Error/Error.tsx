import React from 'react'
export interface ErrorInterface {}

const Error : React.FC<ErrorInterface> = () => {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
}

export default Error

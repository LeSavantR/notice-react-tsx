import React from 'react'

export interface NotFoundPageInterface {}

const NotFoundPage: React.FC<NotFoundPageInterface> = () => {
  return (
    <>
      <h1>Not Found</h1>
    </>
  )
}

export { NotFoundPage }

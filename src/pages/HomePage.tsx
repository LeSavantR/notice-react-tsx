import React from "react"

export interface HomePage {}


const HomePage: React.FC<HomePage> = () => {
  return (
    <>
      <h1>You're logged to the home page!</h1>
    </>
  )
}

export { HomePage }
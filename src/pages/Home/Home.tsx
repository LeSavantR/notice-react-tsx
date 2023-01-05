import React from 'react';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
  return (
    <>
      <h1>You're logged to the home page!</h1>
    </>
  );
};

export default Home;

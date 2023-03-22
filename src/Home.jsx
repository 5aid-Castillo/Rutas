import React from 'react'
import Router from './router/Router'
import Provider from './context/Provider'
const Home = () => {
  return (
    <>
         <Provider>  
            <Router />
         </Provider>  
    </>
  )
}

export default Home
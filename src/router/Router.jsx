import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../pages/Login'
import Router2 from './Router2'
import RutasPrivadas from './RutasPrivadas'
import RutasPublicas from './RutasPublicas'


const Router = () => {
  return (
    <>

        <Routes>
          {/*    <Route path="/" element={<Navigate to="login"/>}/> */}

            <Route path="/Rutas" element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
            }/>

            <Route path="/*" element={
            <RutasPrivadas>
              <Router2 />
            </RutasPrivadas>
            }/>
        
        </Routes>
    </>
  )
}

export default Router
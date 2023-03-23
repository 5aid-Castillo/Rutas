import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'
import Comprar from '../pages/Comprar'
import CP from '../pages/CP'

import MiViaje from '../pages/MiViaje'
import NO from '../pages/NO'

const Router2 = () => {
  return (
    <>
        <NavBar />
        <Routes>
           
            <Route path="cp" element={<CP />}/>
            <Route path="no" element={<NO />}/>
            <Route path="viaje" element={<MiViaje />}/>
            <Route path="destino/:nombre" element={<Comprar />} />
   
            <Route path="/*" element={<Navigate to="cp"/>}/> 
        </Routes>
    </>
  )
}

export default Router2
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import Context from '../context/Context'

const RutasPrivadas = ( {children}) => {
  
    const {logeado} = useContext(Context);
    return ( logeado )
    ? children
    : <Navigate to="/login"/>
}

export default RutasPrivadas
import React, { useContext } from 'react'
import Context from '../context/Context'
import Router2 from './Router2';

const RutasPublicas = ( {children}) => {
  
    const {logeado} = useContext(Context);
    return ( logeado )
    ? <Router2 />
    : children
}

export default RutasPublicas
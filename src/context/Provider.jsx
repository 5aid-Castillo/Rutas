import React, { useReducer, useState } from 'react'
import Context from './Context'
import miReducer from '../stateManagement/miReducer';
import miReducer2 from '../stateManagement/miReducer2';
import types from '../stateManagement/types';


const init = () => {
    const user = localStorage.getItem("valor");
    return{
        /* Si no hay un tipo de valor, logeado sera false, si hay alguno ponerle true */
        logeado: !!user,
        usuario: user
    }
   
}

const valorInicial = [];


const Provider = ({ children }) => {
   
    /* miReducer: se encargara de recibir las acciones y saber si se tiene que autentificar o no */
    /* init es una funcion que me va a permitir modificar el valor inicial a traves del localStorage */
    const [autenficacion, dispatch] = useReducer(miReducer, {}, init);

    const [contratacion, dispatch2] = useReducer(miReducer2,valorInicial);
    
    const [referencia, setReferencia ]= useState("");
    const [sumaTotal, setSumaTotal ]= useState(0);
    const logearse = (user) =>{
        const action = {
            type:types.login,
            payload: user
        }
        /* Actualizar el localStorage poniendo el usuario al valor  */
        localStorage.setItem("valor",user)
        dispatch(action);
    }
    const deslogearse = () => {
        const action = {
            type:types.logout,
            payload: null
        }
        /* Borrar el localStorage */
        localStorage.removeItem("valor")
        dispatch(action);
    } 
    
     
  return (
    <>
        <Context.Provider value={{
            contratacion,
            dispatch2,
            ...autenficacion,
            logearse,
            deslogearse,
            referencia,
            setReferencia,
            sumaTotal,
            setSumaTotal} }>
            
            { children }
        </Context.Provider>
    </>
  )
}

export default Provider
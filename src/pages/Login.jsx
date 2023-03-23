import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';
import '../styles/Login.css';

const Login = () => {
   const {logearse, referencia, setReferencia} = useContext(Context);  
   const navegacion = useNavigate();
   const login = () =>{
     logearse(referencia) 
      navegacion('/cp',{replace:true});
  }
  const registro = (e) => {
    setReferencia(e.currentTarget.value)
  }
  return (
    <>
    <section className="login section container">
      <div className='secContent grid'>
        <h1>Vive el pais!</h1>
        <label htmlFor="referencia">Referencia: </label>
        <div className='input flex'>
         <input id="referencia" onChange={registro} placeholder="Ingresa tu nombre" autoFocus autoComplete='off'/>
         </div>
        <button className="botonRegistro btn" onClick={login}> Login</button>
        </div>
    </section>
  </>

  )
}

export default Login
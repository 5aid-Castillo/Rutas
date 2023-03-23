import React, { useContext,useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../../context/Context';
import { Rotate as Hamburger } from 'hamburger-react'
import '../../styles/Header.css'
const NavBar = () => {
    const{deslogearse} = useContext(Context);  
    const navegacion = useNavigate();
    const logout = () => {
         deslogearse(); 
        navegacion('/login',{replace:true})
    }

    const[isOpen, setOpen] = useState(false);
    const close = () =>{
      setOpen(!isOpen)
    }
  return (
    <>
      <header className="header">
        <nav className='navigation'>
          <button  className="burger mobile"><Hamburger color="#000" toggled={isOpen} toggle={setOpen} /> </button>
              
              <div id="navbar" className={isOpen ?"#navbar active" :"navbar"}>
                  <NavLink onClick={close} to="/Rutas">Capital y Patagonia</NavLink>
                  <NavLink onClick={close} to="/no">Norte y Este</NavLink>
                  <NavLink onClick={close} to="/viaje">Mi Viaje</NavLink>
          {/*         <NavLink onClick={close}  to="/login">Login</NavLink> */}
              </div>    
                  <button  className="logout-button" onClick={logout}>Logout</button>
        </nav>
        </header>
    </>
  )
}

export default NavBar
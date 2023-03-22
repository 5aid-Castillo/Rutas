import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Context from '../context/Context';
import data from '../data/data';
import types from '../stateManagement/types';
import '../styles/Comprar.css'
import {motion} from 'framer-motion';

const Comprar = () => {
  
  const {nombre} = useParams();
  const destinoEncontrado = data.find(dato => dato.nombre === nombre)
  
  const navegacion = useNavigate();
  const volver=() =>{ 
    navegacion(-1)
  }
  
 

  const {dispatch2, contratacion,sumaTotal,setSumaTotal} =useContext(Context);
  const encontrado = contratacion.find(objeto => objeto.sitio===nombre)
  const contratar = () =>{
    setSumaTotal(sumaTotal + destinoEncontrado.precio)
      const action ={
        type:types.contratar,
        payload:{nombre:nombre,precio:destinoEncontrado.precio}
      }
      dispatch2(action)
  }
  const anular = () =>{
    setSumaTotal(sumaTotal - destinoEncontrado.precio)
      const action = {
        type:types.anular, 
        payload:{nombre:nombre}
      }
      dispatch2(action)
  }

  const imagen = `/images/${destinoEncontrado.imagen}`
  if(!destinoEncontrado){
    return <Navigate to="/no"/>
  }
  return (
    <>

        <center className="contenido">
        <h1>{nombre}</h1>
        <div className="servicios">{destinoEncontrado.servicio}</div>
        
        <motion.div className="precio"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                   }
              }}>
                ${destinoEncontrado.precio}
        </motion.div>
        <motion.div className="route-image"
            initial={{x:200}}
            transition={{duration:2}}
            animate={{x:0}}
        ><img src={imagen} alt=""/>
        </motion.div>
        
        <div className="choose-buttons">
        {(!encontrado) && <button className="boton contratar" onClick={contratar}>Contratar</button>}
        {(encontrado) && <button className="boton anular" onClick={anular}>Anular</button>}

        <button className="boton back" onClick={volver}>Volver</button>
        </div>
        </center>
    </>
  )
}

export default Comprar
import React from 'react'
import Destino from '../pages/Destino';
import data from './data.js'
import '../styles/Destinos.css';
import {motion} from 'framer-motion';



const CrearListado = ({zona}) => {

    /* para que solo anada aquellos elementos que coincidan */
    const listado = data.filter(destino => 
            destino.zona === zona)
            console.log(listado)
    return (
  <>


   <section className="container-grid container section">
       <div className='headerText'>
          <motion.h1 
                  initial={{scale:0}}
                  animate={{scale:1}}
                  transition={{
                      duration:2,
                      ease:'easeInOut',
                      delay:0.2
                  }}>
              Disfruta Experiencias Increibles
          </motion.h1>
       </div>
       <motion.div className="destino grid" 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
      }}> 
      {/* Recorra listado que es un array de objetos, que lo recorra uno a uno */}
        {listado.map(dato=> (
          <Destino key={dato.nombre}{...dato}/>
        ))}
        </motion.div> 
     </section> 
  </>
  )
}

export default CrearListado
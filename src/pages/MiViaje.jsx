import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import types from '../stateManagement/types';
import '../styles/MiViaje.css';
import alert from '../assets/alerta.png';
import {AnimatePresence, motion} from 'framer-motion';

const variants = {
  hidden:{
    opacity:0
  },
    visible: ({delay}) => ({
      opacity: 1,
      transition:{
        delay,
        duration:1
      }
    })
}

const MiViaje = () => {

  const {contratacion, dispatch2,referencia,sumaTotal,setSumaTotal} = useContext(Context);
  return (
    <>
      <section className="ruta">
        <motion.h3 initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                   }
              }}>Lugares a visitar</motion.h3>
        {(contratacion.length < 1) &&
        <div className="aviso">
          <div className='alert'>
          <img src={alert} alt="" className='icon'/>
          Todavia no has contratado ninguna actividad. <br />
            Haz click en: <br /> {<Link to={'/cp'}> Capital y Patagonia</Link>} <br />o  <br />
            {<Link to={'/no'}> Norte y Este</Link>}  <br />Para ver nuestras ofertas.
            </div>
        </div>}
        <AnimatePresence>
        {contratacion.map((mapa,index) => 
            <motion.div key={mapa.sitio} className="result"
                    custom={{delay: (index + 1) * 0.2}}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    layoutId={mapa.sitio}>
                <button onClick={
                  () => {
                    setSumaTotal(sumaTotal - mapa.precio)
                    dispatch2({
                      type:types.anular,
                      payload:{nombre:mapa.sitio}
                    })
                  }
                }>Anular</button>
                 <div className='inline'>{mapa.sitio}</div> <div className='inline cash'> ${mapa.precio}</div>

            </motion.div>)}

            </AnimatePresence>
            {(contratacion.length > 1) && 
            <div className='total'>
            <h3>Total a pagar:${sumaTotal}</h3>
            </div>
            }
            <div className="referencia">
              <h3>Referencia: {referencia}</h3>
            </div>
      </section>
    </>
  )
}

export default MiViaje
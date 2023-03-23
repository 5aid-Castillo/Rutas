import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import '../styles/Destinos.css';




const Destino = ({nombre,imagen,situacion}) => {
    /* const ruta = `/images/${imagen}`; */
 /*    const ruta = `${imagen}`; */
    const {contratacion} =useContext(Context);
    const encontrado = contratacion.find(objeto => objeto.sitio === nombre)
    return (
    <>
   
    <div className="single-destino">
        <div className="imgDiv"><img src={imagen} alt=""/></div>
        <div className='card-info'>
        <div className='nombre flex'>{nombre}</div>
        <div className="situacion flex">{situacion}</div>
        </div>
        <div className="inf">
          <Link to={`/destino/${nombre}`}>Mas Info</Link>
          {(encontrado) && <div className="circulo"></div>}
        </div>
    </div>
    </>
  )
}

export default Destino
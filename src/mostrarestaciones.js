import React from 'react';
import './mostrarestaciones.css'


const estacionConf ={

  verano:{
    texto:'Hace calor, vamos a la playa',
    icono: 'sun'
  },
  invierno:{
    texto:'Hace frio, vamos por un chocolate',
    icono: 'snowflake'
  }
}


const getEstacion = (lat,mes) =>{

  if(mes>2 && mes <9){
    return lat> 0 ? 'verano' : 'invierno';
  }else{
    return lat > 0 ? 'invierno' : 'verano';
  }
}

const MostarEstaciones = props =>{

  const estacion=getEstacion(props.lat, new Date().getMonth());
  const {texto,icono}=estacionConf[estacion];

  return   (
    <div className={`MostarEstaciones ${estacion}`}>
      <i className={`icono-izquierda massive ${icono} icon`} />
      <h1>{texto}</h1>
      <i className={`icono-derecha massive ${icono} icon`} />
    </div>
  );
};
export default MostarEstaciones;

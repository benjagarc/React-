import React from 'react';

const Spinner = (props)=>{
  return(

    <div className="ui active  dimmer">
      <div className="ui tiny text loader"> {props.mensaje}</div>
    </div>
  );
}


Spinner.defaultProps={
  mensaje:'Cargando...'
}
export default Spinner;

import React from 'react';



function Nombre(props){
    console.log(props);
    
    return( 
    <div>
        <input placeholder='Nombre' name='nombre' nombre={props.nombre} onChange={props.onChange}></input>
    </div>
    )
}


export default Nombre;
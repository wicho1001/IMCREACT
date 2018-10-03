import React from 'react';



function Nombre(props){
    console.log(props);
    
    return( 
    <div>
        <input placeholder='Nombre' onChange={props.changeValue}></input>
    </div>
    )
}


export default Nombre;
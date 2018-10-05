import React, {Component} from 'react';

function Peso(props) {

    return( 
        <div>
            <input placeholder='Peso'name={props.name}  value={props.peso} onChange={props.onChange}/>
        </div>
    )
}

export default Peso;
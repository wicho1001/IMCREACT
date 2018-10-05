import React from 'react';


function Altura (props){
    console.log("props altura" );
    
    // state = {
    //     value1:''
    // }

    // handleChange = (event) => {
    //     this.setState({value1: event.target.value});
    //     console.log(this.state.value1)
    // };
        return( 
            <div>
                <input placeholder='Altura' name={props.name} altura={props.altura} onChange={props.onChange}></input>
            </div>
        );
}


export default Altura;
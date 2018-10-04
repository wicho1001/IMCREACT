import React,{Component} from 'react';


class Altura extends Component{
    state = {
        value1:''
    }

    handleChange = (event) => {
        this.setState({value1: event.target.value});
        console.log(this.state.value1)
    };
    render(){
        return( 
            <div>
                <input placeholder='Altura' value1={this.state.value1} onChange={this.handleChange}></input>
            </div>
        );
    }
}


export default Altura;
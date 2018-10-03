import React,{Component} from 'react';


class Altura extends Component{
    constructor(props){
        super(props);
        this.state = {value1: ''}
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value1: event.target.value});
        console.log(this.state.value1)
      }
    render(){
        return( 
            <div>
                <input placeholder='Altura' value1={this.state.value1} onChange={this.handleChange}></input>
            </div>
        )
    }
}


export default Altura;
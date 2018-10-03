import React, {Component} from 'react';

class Peso extends Component{
    
    constructor(props){
        super(props);
        this.state = {value: ''}
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value)
      }
    render(){
        return( 
        <div>
            <input placeholder='Peso' value={this.state.value} onChange={this.handleChange}/>
        </div>
        )

    }
}


export default Peso;
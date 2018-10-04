import React from 'react';
import {Component,Fragment} from 'react';




class BMI extends Component {
  state = {
    value1:'',
    value:''
  }

  handleChange1 = (event) => {
    this.setState({value1: event.target.value});
    console.log(this.state.value1)
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  };

  calcBMI = () => { 
    BMI = this.state.value/(this.state.value1 * this.state.value1);
    console.log(BMI);
    return document.querySelector('#result').innerHTML = BMI;
  }

  render() {
    return(
      <Fragment>
        <input placeholder='Altura' value1={this.state.value1} onChange={this.handleChange1}/>
        <input placeholder='Peso' value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.calcBMI}>presione aqui</button>
        <p id='result'></p>
      </Fragment>
    )
  }
}
  

export default BMI;
import React from 'react';
import {Component,Fragment} from 'react';
import Altura from '../src/Components/Altura'
import Peso from '../src/Components/Peso'
import Nombre from '../src/Components/Nombre'


class BMI2 extends Component {
    state = {
        altura:'',
        peso:'',
        nombre:''
    }
    handleChanges = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value},()=>{console.log("hande",this.state)});    
  };

  calcBMI = () => { 
    let BMI = this.state.peso/(Math.pow(this.state.altura,2) );
    let imprimirNombre = this.state.nombre
    console.log(BMI);
    return document.querySelector('#result').innerHTML = imprimirNombre + ' ' +  ('Tu Indice de Masa Corporal es: ') + BMI;
  }

  render() {
    return(
      <Fragment>
        <Nombre name="nombre" value={this.state.nombre} onChange={this.handleChanges}/>
        <Altura name="altura" value={this.state.altura} onChange={this.handleChanges}/>
        <Peso name="peso" value={this.state.peso} onChange={this.handleChanges} />
        <button onClick={this.calcBMI}>presione aqui</button>
        <p id='result'></p>
      </Fragment>
    )
  }
}
  

export default BMI2;
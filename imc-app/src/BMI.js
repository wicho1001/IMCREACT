import React from 'react';
import {Component,Fragment} from 'react';
import Altura from '../src/Components/Altura'
import Peso from '../src/Components/Peso'
import Nombre from '../src/Components/Nombre'
import Boton from '/home/jose/Desktop/BEDU/imcreact/imc-app/src/Components/Boton.js';





class BMI extends Component {
  calcBMI = (event)=>{
  BMI = this.state.valor / (this.state.valor1 * this.state.valor1);
  return  console.log( BMI);
  }

  render() {
    return(
      <Fragment>
        <Altura />
        <Peso />
        <Boton onClick={this.calcBMI}/>
      </Fragment>
    )
  }





  //   state = {
  //     valor:''
  //   }
  //       cambiarState = ({target})=>{
  //         this.setState(()=>{
  //           valor: target.value
  //         })
  //         console.log('target.value')
        
  //       }
  //       
            
            
  //         }
  //         render() {
  //           return (
  //             <Fragment className="App">
  //       <Nombre inject={this.state.valor} onChange={this.cambiarState}/>
  //       <Peso />
  //       <Altura inject={this.state.valor} onChange={this.cambiarState}/>
  //       <Boton onClick={this.calcBMI} />
  //       </Fragment>
  //     );
  //   }
}
  

export default BMI;
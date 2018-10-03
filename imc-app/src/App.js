import React, { Component } from 'react'

import styled, { css } from 'styled-components'

const MainContainer = styled.section`
    background-color: #111;
    width: 100vw;
    height: 100vh;
`;

const name = "hola"

// export default () => (<MainContainer>
//     <Helper inject={name}>
//     </Helper>
//     <Helper3 name={name}>
//     </Helper3>
// </MainContainer>)

export default class extends Component {
    state = {
        name: 'roderik'
    }
    changeInput = ({event}) => {
        console.log(this.target.value)
        this.setState(() => ({name: this.target.value}))
        event.preventDefault();
    }
    render () {
        return(<MainContainer>
            <Helper inject={this.state.name} onChange={this.changeInput}>
            </Helper>
            {/* <Helper3 name={this.state.name}>
            </Helper3> */}
        </MainContainer>) 
    }
}

const White = styled.div`
    color: white;
`

const Helper = (props) => {
    const Child = props.children
    return  (<White><Helper2 name={props.inject} onChange={props.onChange}></Helper2></White>)
}
const Helper2 = (props) => {
    return  (<White><Helper3 name={props.name} onChange={props.onChange}></Helper3></White>)
}
const Helper3 = (props) => {
    // console.log(props.onChange)
    return  (<White>
    {props.name}{props.children}
        <input
            onChange={props.onChange}
            value={props.name}
        />
    </White>)
}
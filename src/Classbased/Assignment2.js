import React, { Component } from 'react'

export default class Assignment2 extends Component {

    constructor(){
        super();
        this.state={
            counter:0,
            text:""
        }
    }

    shouldComponentUpdate(props,nextState){
        if(this.state.counter===10){
            
    }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.shouldComponentUpdate}>Click me</button>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

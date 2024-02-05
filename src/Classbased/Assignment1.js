import React from "react"
import { Component } from "react"

export default class Assignment1 extends Component{
    constructor(){
        super();
        this.state={
            name:"Tanmay",
            show:false,
        }
    }

    update = () => {
        if (this.state.show === false) {
            this.setState({ show: true });
        }
        else {
            this.setState({ show: false });
        }
    }

    render() {
        return (
            <div>
                <h1 hidden={this.state.show}>{this.state.name}</h1>
                <button onClick={this.update}>click me</button>
            </div>
        )
    }
}
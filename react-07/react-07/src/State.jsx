import React, { Component } from "react";

const demo = `
rcc=
constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
      
    handleIncrease = () => {
        this.setState ({
           
        })
    }

   
    }`; 

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
      <div className="state">
        <h1>state, setState and event handler</h1>
        <h3>1. State</h3>
        <pre> {demo}</pre>
        <br />
        <br />

        <span>Ex:1</span>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrease}
        disabled={this.state.count === 10 ? true : false}>+</button>
        <button
          onClick={this.handleDecrease}
          disabled={this.state.count === 0 ? true : false}
        >-</button>
      </div>
      </>
    );
  }
}

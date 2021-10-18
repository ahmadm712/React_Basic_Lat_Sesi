import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    // Imuttable
    this.state = {
      counter: 0,
    };
  }
  handleIncrement = (inc) => {
    const currentCounter = this.state.counter;
    this.setState({ counter: currentCounter + inc });
  };
  //   handleDecrement = () => {
  //     const currenCounter = this.state.counter;
  //     this.setState({ counter: currenCounter - 1 });
  //   }

  render() {
    const counter = this.state.counter;

    return (
      <div className="container">
        <h2>Counter App in Class</h2>

        <p>Counter : {counter}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.handleIncrement(3)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.handleIncrement(-3)}
        >
          Decrement
        </button>
      </div>
    );
  }
}

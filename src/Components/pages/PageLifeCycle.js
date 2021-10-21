import React, { Component } from "react";

export default class PageLifeCycle extends Component {
  // 1
  constructor(props) {
    super(props);
    //inisialisasi data
    this.state = {
      number: 0,
    };
  }

  //4
  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  //3
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }


  componentWillUnmount(){
      console.log('Ahmad');
  }

  // 2
  render() {
    console.log("Render " + this.state.number);
    return (
      <div className="container">
        <p>{this.state.number}</p>
      </div>
    );
  }
}

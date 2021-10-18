import React, { Component } from "react"

class ClassComponent extends Component {
  hitme2 = () => {
    console.log("Youre Click Me brother");
  };
  render() {
    return (
      <div>
        <button onClick={this.hitme2}> Hit Me Brother</button>
      </div>
    );
  }
}

export default ClassComponent;

import React, { Component } from "react";
import "./button.css";

export default class ButtonClass extends Component {
  render() {
    // let colorClassName = "";

    // if (isActive == true) {
    //   colorClassName = "active";
    // }

    const { isActive, children, label } = this.props;

    const colorClassName = isActive ? "active" : "";

    return (
      <div className={colorClassName}>
        From Button Class :{label} : {children}
        <button className="btn btn-primary mb-4">Click Here</button>
      </div>
    );
  }
}

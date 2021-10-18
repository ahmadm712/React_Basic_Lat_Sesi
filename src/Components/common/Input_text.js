import React, { Component } from "react";

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      class: "",
      password: "",
    };
  }
  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  onChangeClass = (event) => {
    this.setState({
      class: event.target.value,
    });
  };
  onChangePass = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmitData = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Sesi 2 Tanggal 18</h1>
        <p className="text-black">{this.state.name}</p>

        
        <form onSubmit={(e) => this.onSubmitData(e)}>
          <label className="form-label">Full Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.onChangeName(e)}
            className="form-control mb-3"
          />
          <label className="form-label">Class</label>
          <input
            type="text"
            value={this.state.class}
            onChange={(e) => this.onChangeClass(e)}
            className="form-control"
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            onChange={(e) => this.onChangePass(e)}
            aria-describedby="passwordHelpInline"
          />

          <button className="btn btn-primary mt-3" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

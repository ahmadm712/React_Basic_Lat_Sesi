import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props){
    super(props)


    this.state = {
      value : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event){
    this.setState({
      value : event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    alert('Nama Saya ' + this.state.value)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='nama_lengkap' onChange={this.handleChange}/>
          <button type='submit'>Send</button>
          <h1>{1+2}</h1>
        </form>
      </div>
    );
  }
}

export default FormComponent;

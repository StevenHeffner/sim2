import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
  constructor(){
    super();

    this.state = {
      name:'',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    }
  }
  handleName(value){
    this.setState({
      name: value
    })
  }

  handleAddress(value){
    this.setState({
      address: value
    })
  }
  handleCity(value){
    this.setState({
      city: value.target.value
    })
  }
  
  handleState(value){
    this.setState({
      state: value
    })
  }
  handleZipCode(value){
    this.setState({
      zipCode: value
    })
  }

  render() {
    return (
      <div>
        
        <div>Add New Listing <Link to = '/'><button>Cancel</button></Link></div>
        Name: <input onChange={(e) => this.handleName(e.target.value)}></input>
        Address: <input onChange={(e) => this.handleAddress(e.target.value)}></input>
        City: <input onChange={(e) => this.handleCity(e)}></input>
        State: <input onChange={(e) => this.handleState(e.target.value)}></input>
        Zip: <input onChange={(e) => this.handleZipCode(e.target.value)}></input>

      </div>
    );
  }
}

export default Wizard
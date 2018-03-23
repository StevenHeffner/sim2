import React, { Component } from "react";
import House from "../House/House";
import axios from "axios"
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    
    this.state = {
      houses: []
    }
  }
  componentDidMount(){
    this.getAllHouses()
  }
  getAllHouses(){
    axios.get('/api/houses')
    .then(res => {
      this.setState({
        houses: res.data
      })
   })
  }

  render() {
    return (
      <div>
        {this.state.houses.map((house, key) => {
          return(
            <House key={key} house={house}/>
          )
        })}
        DASHBOARD!!!!
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;

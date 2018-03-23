import React, { Component } from 'react';

function House(props){
  let {name, address, city, state, zip} = props.house
    return (
      <div className = 'dishouse'>
        {name}
        {address}
        {city}
        {state}
        {zip}
      </div>
    );
  
}

export default House;
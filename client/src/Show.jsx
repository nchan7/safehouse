import React from 'react';
import './App.css';

function Show() {
    return (
      <div className="App">
        <h3>Your Home's Risk</h3>
            <h5>Address:</h5>
            <p>{props.address}</p>
            <h5>Zip Code:</h5>
            <p>{props.zipcode}</p>
      </div>
    );
  }

  export default Show;
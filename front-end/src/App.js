import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="container home-container">
          <div className="form-cont">
            <div className="zip-form">
              <label className="zip-label" for="zipcode">Enter Your Zip Code</label>
              <input type="text" placeholder="zipcode" class="form-control" id="zipcode"></input>
            </div>
            <button className="btn btn-primary zip-sub">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import MapComponent from "./components/map/MapComponent";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          zip: '',
          submitted: false
      }
  }

  handleChange = (e) => {
    this.setState({zip: e.target.value});
  }

  onSubmit = () => {
    this.setState({submitted: true});
  }

  render() {
    return (
      !this.state.submitted ? 
        <div className="home">
        <div className="container home-container">
          <div className="form-cont">
            <div className="zip-form">
              <label className="zip-label" for="zipcode">Enter Your Zip Code</label>
              <input onChange={this.handleChange} type="text" placeholder="zipcode" class="form-control" id="zipcode"></input>
            </div>
            <button onClick={this.onSubmit} className="btn btn-primary zip-sub">Submit</button>
          </div>
        </div>
      </div> 
      :
      <MapComponent>


       
      </MapComponent>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import MapComponent from "./components/map/MapComponent";
import Menu from "./components/menu/Menu";
import Schedule from "./components/schedule/Schedule";
import scheduleService from "./services/schedule.service";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          zip: '',
          submitted: false,
          food: [],
      }
      this.scheduleService = scheduleService.instance
  }

  handleChange = (e) => {
    this.setState({zip: e.target.value});
  }

  onSubmit = () => {
      this.setState({ submitted: true });
  }

  render() {
    return (
      <div>
        <Menu/>
        {
          !this.state.submitted ? 
            <div className="home">
              <div className="container home-container">
                <div className="form-cont">
                  <div className="zip-form">
                    <label className="zip-label" for="zipcode">Build a Food Schedule</label>
                    <input onChange={this.handleChange} type="text" placeholder="Enter your zipcode..." className="form-control form-control-lg" id="zipcode"></input>
                  </div>
                  <button onClick={this.onSubmit} className="btn btn-primary btn-lg zip-sub">Submit</button>
                </div>
              </div>
            </div> 
          :
          <Schedule zip={this.state.zip}/>
        }
      </div>
    );
  }
}

export default App;


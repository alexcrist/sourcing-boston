import React, { Component } from 'react';
import Header from '../header/Header';
import Day from "../day/Day";
import MapComponent from "../map/MapComponent";
import "./Schedule.css";

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.days = 
            [
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
                {
                    "date": "2018-12-25",
                    "day": "Tuesday",
                    "sources": [
                    {
                        "name": "Allston-Brighton APAC",
                        "type": "Food pantry",
                        "address": "406 Cambridge St, Allston, MA 02134",
                        "phone": "(617) 783-1485",
                        "hours": ["10:00am", "2:00pm"],
                        "disabilityAccessible": false
                    }
                    ]
                },
            ]
    }

    render() {
        return (
            <div>
                <Header/>
                <nav className="navbar navbar-expand-lg navbar-light food-nav">
                    <h2 className="schedule-link">Food Schdeule</h2>
                </nav>
                <div className="container">
                    <div class="row">
                        <div class="col-sm">
                            <Day day={this.days[0]}/>
                        </div>
                        <div class="col-sm">
                            <Day day={this.days[1]}/>
                        </div>
                        <div class="col-sm">
                            <Day day={this.days[2]}/>
                        </div>
                        <div class="col-sm">
                            <Day day={this.days[3]}/>
                        </div>
                        <div class="col-sm">
                            <Day day={this.days[4]}/>
                        </div>
                        <div class="col-sm">
                            <h4>Time for Food</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <Day day={this.days[5]}/>
                        </div>
                        <div class="col-sm">
                            <Day day={this.days[6]}/>
                        </div>
                        <div class="col-8">
                            <h4>Map</h4>
                            {/* <MapComponent /> */}
                        </div>
                    </div>
                </div>    
            </div>    
        )
    }

}

export default Schedule;
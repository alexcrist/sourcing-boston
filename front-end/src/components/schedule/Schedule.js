import React, { Component } from 'react';
import Day from "../day/Day";
import MapComponent from "../map/MapComponent";
import "./Schedule.css";
import scheduleService from '../../services/schedule.service'; 

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: []
        };
    }

    componentDidMount() {
        scheduleService.getSchedule(this.props.zip)
        .then(data => data.json())
        .then(data => {
            this.setState({ days: data }, () => {
                console.log('state');
                console.log(this.state);
            });
            console.log('it is done');
            console.log(data);
        })
        .catch(console.error);
    }

    render() {
        const days = this.state.days.map((day, index) => {
            return (
                <div class="col-sm" key={index}>
                    <Day day={day}/>
                </div>
            )
        });

        return (
            <div>
                <div>
                    <h2 className="schedule-link">Food Schdeule</h2>
                </div>
                <div className="container">
                    <div class="row">
                        {days}
                    </div>
                </div>    
            </div>    
        )
    }

}

export default Schedule;
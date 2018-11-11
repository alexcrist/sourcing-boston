import React, { Component } from 'react';
import Day from "../day/Day";
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
            this.setState({ days: data })
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
        const first = days.slice(0,4);
        const second = days.slice(4, 7);

        return (
            <div style={{paddingTop:'40px'}}>
                <div>
                    <h2 className="schedule-link">Food Schdeule</h2>
                </div>
                <div className="container">
                    <div class="row">
                        {first}
                    </div>
                    <div class="row">
                        {second}
                        <div className="col"></div>
                    </div>
                </div>    
            </div>    
        )
    }

}

export default Schedule;
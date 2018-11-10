import React, { Component } from 'react';

class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {day} = this.props.day
        let {name, type, address, phone, hours, disabilityAccessible} = this.props.day.sources[0]
        return (
            <div>
                <h4>{day}</h4>
                <h5>{name}</h5>
                <h5>{type}</h5>
                <h5>{address}</h5>
                <h5>{phone}</h5>
                <h5>{hours}</h5>
                <h5>{disabilityAccessible}</h5>
            </div>
        )
    }
}

export default Day;
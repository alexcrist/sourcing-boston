import React, { Component } from 'react';

class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { day, date, sources } = this.props.day
        return (
            <div>
                <h4>{day}</h4>
                <h4>{date}</h4>
                {sources.forEach(source => {
                    let { name, category, address, phone, availability } = source;
                    return (
                        <div>
                            <b><h5>{name}</h5></b>
                            <h5>{category}</h5>
                            <h5>{address}</h5>
                            <h5>{phone}</h5>
                            <h5>{availability}</h5>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Day;
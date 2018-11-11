import React, { Component } from 'react';

class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { day, date, sources } = this.props.day
        return (
            <div className="card">
                <div clasName="card-body" style={{padding: "10px", backgroundColor: "#f7f7f9", boxShadow: "5px 10px grey"}}>
                    <div>
                        <h4>{day} | {date}</h4>
                        {console.log(sources)}
                        {sources.map(source => {
                            let { name, address, phone, availability, type } = source.source;
                            console.log(name, address, phone, availability, type)
                            console.log()
                            return (
                                <div>
                                    <b><p>{name}</p></b>
                                    <p>{type}</p>
                                    <p>{address}</p>
                                    <p>{phone}</p>
                                    <p>Today's Hours: {availability[day.toLowerCase()].join("-")}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Day;
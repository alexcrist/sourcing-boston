import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light food-nav">
                <a className="navbar-brand food-link" href="#">Time 4 Food</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <a className="nav-link food-link" href="#">Build Schedule</a>
                        </li>
                        <li>
                            <a className="nav-link food-link" href="#">Food Resources</a>
                        </li>
                        <li>
                            <a className="nav-link food-link" href="#">Get Help</a>
                        </li>
                        <li>
                            <a className="nav-link food-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
          </nav> 
        )
    }
}

export default Menu;
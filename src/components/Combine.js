import React, { Component } from 'react';
import Login from './Login';
//import App from './App';
import { Element } from 'react-scroll';
import Complaint from './Complaint'

class Combine extends Component {
    render() {
        return (
            <div className="Combine">
                <Login />

                <Element name="Complaint">
                    <Complaint />
                </Element>
            </div>
        );
    }
}
export default Combine; 
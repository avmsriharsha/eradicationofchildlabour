import React, { Component } from 'react';
import '../css/Govern.css';
class Govern extends Component {
    hospitalClick = () => {
        this.props.history.push("/hospitalmap");
    }
    anganwadiClick = () => {
        this.props.history.push("/anganwadimap");
    }
    OrphanClick = () => {
        this.props.history.push("/orphanagemap");
    }
    schoolClick = () => {
        this.props.history.push("/schoolmap");
    }

    render() {
        return (
            <div className="gun">
            <header className="headers">
                <button className="ns" onClick={this.hospitalClick}>Hospital</button>
                <button className="na" onClick={this.anganwadiClick}>Anganwadi</button>
                <button className="ne" onClick={this.schoolClick}>Schools</button>
                <button className="ni" onClick={this.OrphanClick}>Orphanage</button>

            </header></div>
        );
    }

}
export default Govern; 
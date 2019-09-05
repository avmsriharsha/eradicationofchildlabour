import '../css/Orphanage.css'
import Scrol from './Scrol'
import React, { Component } from 'react';
class Orphanage extends Component {
    handleClick = () => {
        this.props.history.push("/");
    }
    anganwadiClick = (event) => {
        event.preventDefault();
        
        this.props.firebase.writeChildDetails(
            event.target.ChildAadhar.value,
            event.target.ChildName.value,
            event.target.DOB.value,
            event.target.gender.value,
            event.target.status.value,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            event.target.OrphanageId.value,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null)
    this.props.history.push("/orphanage");
    }
    render() {

        return (
            <div className='orph'>
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details">
                    <h1>ORPHANAGE</h1><br />
                    <h3>CHILD DETAILS</h3>
                    <form onSubmit={this.anganwadiClick}>
                        <input id="ons" type="text" name="ChildName" placeholder="Child Name"></input><br />
                        <br /><input id="ons" type="text" name="ChildAadhar" placeholder="Child Aadharcard number" size="25"></input><br />
                        <input id="ons" type="date" name="DOB" placeholder="Child Date of Birth"></input><br />
                        <input id="ons" type="text" name="gender" placeholder="Gender"></input><br></br>             
                        <input id="ons" type="text" name="status" placeholder="Status"></input><br></br>                        
                        <br /><input id="ons" type="text" name="OrphanageId" placeholder="OrphanageId"></input><br />
                        <div className="pic"><Scrol /></div>
                        <br></br><button id="ocl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;&nbsp;
                        <button id="osb" type="submit" value="submit">Submit</button><br />
                    </form>
                </div>
            </div>
        );
    }
}

export default Orphanage;
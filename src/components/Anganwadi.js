import React, { Component } from 'react';
import '../css/anganwadi.css'
import Scrol from './Scrol'
class Anganwadi extends Component {
    handleClick = () => {
        this.props.history.push("/");
    }
    anganwadiClick = () => {
        this.props.history.push("/anganwadi");
    }
    render() {
        return (
            <div className='angan'>
                <button id="signOut" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details2">
                    <h1 id='hash'>Courtyard Shelter</h1>
                    <form>
                        <br /><input id="ans" type="text" name="ChildId" placeholder="Child Id"></input><br />
                        <input id="ans" type="text" name="ChildName" placeholder="Child Name"></input><br />
                        <input id="ans" type="text" name="ChildAadhar" placeholder="Child Aadhar(If Available)" size="25"></input><br />
                        <input id="ans" type="text" name="Parent name" placeholder="Father name" size="25"></input><br />
                        <input id="ans" type="text" name="Aadhar" placeholder="Father Aadhar"></input><br />
                        <input id="ans" type="text" name="Parent name" placeholder="Mother name" size="25"></input><br />
                        <input id="ans" type="text" name="Aadhar" placeholder="mother Aadhar"></input><br />
                        <input id="ans" type="date" name="dob" /> <br />
                        <input id="ans" type="number" name="Number" placeholder="PhoneNumber"></input><br />
                        <input id="ans" type="text" name="street" placeholder="Street"></input><br />
                        <input id="ans" type="text" name="Town" placeholder="Town/Village"></input><br />
                        <input id="ans" type="number" name="pincode" placeholder="pincode"></input><br />
                        <input id="ans" type="text" name="Town" placeholder="Status"></input><br />
                        <Scrol />

                        <br></br><button id="acl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;&nbsp;
            <button id="asb" type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br />
                    </form>
                </div>
            </div>
        );
    }
}

export default Anganwadi;
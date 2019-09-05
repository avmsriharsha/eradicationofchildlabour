import React, { Component } from 'react';
import '../css/Schools.css'
import Scrol from './Scrol'
class SchoolnewEntry extends Component {
    handleClick = () => {
        this.props.history.push("/");
    }

        anganwadiClick = (event) => {
            event.preventDefault();
            console.log(this.props);
            console.log("dob : " + event.target);
            this.props.firebase.writeChildDetails(event.target.ChildAadhar.value,
                event.target.ChildName.value,
                event.target.dob.value,
                event.target.gender.value,
                event.target.status.value,
                event.target.street.value,
                event.target.Town.value,
                event.target.Country.value,
                event.target.district.value,
                event.target.fatherAadhar.value,
                event.target.fatherName.value,
                null,
                null,
                event.target.anganwadiId.value,
                event.target.income.value,
                event.target.motherAadhar.value,
                event.target.motherName.value,
                event.target.Number.value,
                null,
                event.target.state.value,
                event.target.pincode.value);
        this.props.history.push("/Anganwadi1st");
    }
    render() {
        return (
            <div className='angan'>
                <button id="signOut" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details2">
                    <h1 id='hash'>Child Details</h1>
                    <form  onSubmit={this.anganwadiClick}>
                        {/* <br /><input id="ans" type="text" name="ChildId" placeholder="Child Id"></input><br /> */}
                        <input id="sns" type="text" name="ChildName" placeholder="Child Name"></input><br />
                        <input id="sns" type="text" name="ChildAadhar" placeholder="Child Aadhar(If Available)" size="25"></input><br />
                        <input id="sns" type="text" name="fatherName" placeholder="Father name" size="25"></input><br />
                        <input id="sns" type="text" name="fatherAadhar" placeholder="Father Aadhar"></input><br />
                        <input id="sns" type="text" name="motherName" placeholder="Mother name" size="25"></input><br />
                        <input id="sns" type="text" name="motherAadhar" placeholder="mother Aadhar"></input><br />
                        <input id="sns" type="date" name="dob" placeholder="Enter child DOB"/> <br />
                        <input id="sns" type="text" name="income" placeholder="income"></input><br />
                        <input id="sns" type="number" name="Number" placeholder="PhoneNumber"></input><br />
                        <input id="sns" type="text" name="street" placeholder="Street"></input><br />
                        <input id="sns" type="text" name="Town" placeholder="Town/Village"></input><br />
                        <input id="sns" type="text" name="state" placeholder="State"></input><br />
                        <input id="sns" type="text" name="district" placeholder="District"></input><br />
                        <input id="sns" type="text" name="Country" placeholder="Country"></input><br />
                        <input id="sns" type="number" name="pincode" placeholder="pincode"></input><br />
                        <input id="sns" typr="text"  name="gender" placeholder="Gender(M/F/O)"></input>
                        <input id="sns" type="text" name="status" placeholder="Status"></input><br />
                        <input id="sns" type="text" name="anganwadiId" placeholder="AnganwadiId"></input>
                        <Scrol />

                        <br></br><button id="scl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;&nbsp;
            <button id="ssb" type="submit" value="Submit">Submit</button><br />
                    </form>
                </div>
            </div>
        );
    }
}

export default SchoolnewEntry;
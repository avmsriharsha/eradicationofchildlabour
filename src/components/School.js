import React, { Component } from 'react';
import '../css/Schools.css';
import Scrol from './Scrol'
import data from '../cookedFiles/childData.json';
import { FirebaseContext } from './Firebase';

class School extends Component {
    handleClick = () => {
        this.props.history.push("/");
    }
    anganwadiClick = () => {
        
       // this.props.history.push("/school1st");
    //    event.preventDefault();
    //         console.log(this.props);
    //         console.log("dob : " + event.target);
    //         this.props.firebase.writeChildDetails(event.target.ChildAadhar.value,
    //             event.target.ChildName.value,
    //             event.target.gender.value,
    //             event.target.status.value,
    //             event.target.street.value,
    //             event.target.Town.value,
    //             event.target.Country.value,
    //             event.target.district.value,
    //             event.target.fatherAadhar.value,
    //             event.target.fatherName.value,
    //             null,
    //             null,
    //             null,
    //             event.target.income.value,
    //             event.target.motherAadhar.value,
    //             event.target.motherName.value,
    //             event.target.Number.value,
    //             event.target.schoolId.value,
    //             event.target.state.value,
    //             event.target.pincode.value);
    //     this.props.history.push("/school1st");
    }
    
    render() {
        
        var id = this.props.match.params.id;
        var childAadhar;
        var phoneNumber;
        var town;
        var childName;
        var childStatus;
        var fA;
        var fN;
        var mA;
        var mN;
        var street;
        var pincode;
        this.props.firebase.children().child(id).on('value', snap => {
        childName = snap.val().ChildName || "Enter Child Name";
        childAadhar = snap.val().ChildAadhar || "Enter Child Aadhar";
        phoneNumber = snap.val().PhoneNumber || "Enter phone number";
        town = snap.val().City || "Enter city";
        street=snap.val().Street ||"Enter Street Name";

        fA=snap.val().FatherAadhar
        fN=snap.val().Father_name
        mA=snap.val().MotherAadhar
        mN=snap.val().Mother_name
        childStatus = snap.val().Child_Status
        pincode=snap.val().pincode
        });
        
        
        
        return (
            <div className="school">
                <button id="sign_out" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details1">
                    <h1 id="heading5">STUDENT INFO</h1>
                    <form>
                        <br />Child Id : <input id="sns" type="text" name="ChildId" placeholder={id}></input><br />
                        Child Name : <input id="sns" type="text" name="ChildName" placeholder={childName}></input><br />
                        Child Aadhar : <input id="sns" type="text" name="ChildAadhar" placeholder={childAadhar} size="25"></input><br />
                        Father Name : <input id="sns" type="text" name="Parent name" placeholder={fN} size="25" disabled></input><br />
                        Father Aadhar : <input id="sns" type="text" name="Aadhar" placeholder={fA} disabled></input><br />
                        Mother Name : <input id="sns" type="text" name="Parent name" placeholder={mN} disabled size="25"></input><br />
                        Mother Aadhar : <input id="sns" type="text" name="Aadhar" placeholder={mA} disabled></input><br />
                        Phone Number : <input id="sns" type="number" name="Number" placeholder={phoneNumber}></input><br />
                        Street : <input id="sns" type="text" name="street" placeholder={street}></input><br />
                        City : <input id="sns" type="text" name="Town" placeholder={town}></input><br />
                        Pincode : <input id="sns" type="number" name="pincode" placeholder={pincode}></input><br />
                        Status : <input id="sns" type="text" name="Status" placeholder={childStatus}></input><br />
                        <Scrol />
                        <br></br><button id="scl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;
                        <button id="ssb" type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br />
                    </form>
                </div>
            </div>
        );
    }
}

export default School;
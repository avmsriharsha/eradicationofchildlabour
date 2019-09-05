import React, { Component } from 'react';
import '../css/register.css';

class Register extends Component {
    loginClick = () => {
        var data = {
            'vamsi': { 'password': "vamsi123" }
        }
        var file = './data.json';
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="Register details">

                <div className="Registerbox">
                    <h1 id="heading3">REGISTER </h1>
                    <form action="Register details" method="POST">
                        <body>
                            <input id="rns" type="text" userid="userid" placeholder="User id" size="20"></input><br />
                            <br /><input id="rns" type="password" name="password" placeholder="Enter Password" /><br />
                            <br /><input id="rns" type="password" name="Re-Enter password" placeholder="Re-Enter Password" /><br />
                            <br /><input id="rns" type="" name="Organisation name" placeholder="Organisation name"></input><br />
                            <br /><input id="rns" type="number" name="Number" placeholder="PhoneNumber"></input><br />
                            <br /><input id="rns" type="text" name="Address" placeholder="Address"></input><br />
                            <br /><input id="rns" type="text" name="street" placeholder="Street"></input><br />
                            <br /><input id="rns" type="text" name="Town" placeholder="Town/Village"></input><br />
                            <br /><input id="rns" type="number" name="pincode" placeholder="pincode"></input><br />
                            <br /><input id="rns" type="text" name="Email id" placeholder="Email id"></input><br />
                            <br></br><button id="recl" type="reset" value="cancel">cancel</button>
                            <button id="resb" type="submit" value="Submit" onClick={this.loginClick}>submit</button><br /><br />
                        </body>
                    </form></div>
            </div>
        );
    }
}

export default Register;
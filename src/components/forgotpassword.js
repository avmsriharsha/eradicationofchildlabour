import React, { Component } from 'react'
import data from '../json/data.json';
console.log(data)
class forgotpassword extends Component {
    constructor(props) {
        super(props);
        this.state = { loginError: false };
    }

    submitHandler = (event) => {
        event.preventDefault();
        var username = event.target.Id.value;
        // console.log(this.props.history); 
        if (data.hasOwnProperty(username)) {
            console.log("A password verification has been sent to respected email!")
           
            this.setState({ loginError: false })
            
        
        }
        else
            this.setState({ loginError: true })
    }




    render() {
        var errormsg = undefined;

        if (this.state.loginError)
            errormsg = <p>Invalid Username</p>
        
        
         

        return (
            <div className='forpas' >
                {/* <button id="signouT1" type="button" value="Signout" onClick={this.handleClick}>Signout</button> */}
                <body className="body2">
                    <form onSubmit={this.submitHandler}>
                        <input id="for" type="text" name="Id" placeholder="Unique Id" ></input>
                        <input id="fot" type="submit" name="button" required></input>{errormsg}

                        <br /><br />
                    </form>
                </body>
            </div>
        );
    }
}
export default forgotpassword; 
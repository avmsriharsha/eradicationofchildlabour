import '../css/Police1st.css';
import data from '../cookedFiles/childData.json';
import React, { Component } from 'react';
import { withFirebase } from './Firebase';

class Police1st extends Component {
    constructor(props) {
        super(props);
        this.state = { loginError: false };
    }
    submitHandler = (event) => {
        event.preventDefault();
        var id = event.target.Id.value;
       
        // this.props.firebase.children().child(id).on('value', snap => {
        //     const url = "/Police/" + id;
        //     this.props.history.push(url);
           
        // });  
    }


    handleClick = () => {
        this.props.history.push("/");
    }
    render() {
        
        var errormsg = undefined;

        if (this.state.loginError)
            errormsg = <p id="colour">Invalid id</p>
        else
            errormsg = <p></p>
        return (
            <div className='pol' >
            <br /><br />
                <h1 id="pol">Police</h1>
                <button id="siGnout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <body className="body2">
                    <form onSubmit={this.submitHandler}>
                    <br /><br /><br /><br />
                        <input id="pna" type="text" name="Id" placeholder="Police Id"></input><br /><br />
                        <input id="pna" type="text" name="password" placeholder="password"></input><br /><br />
                        <input id="pna" type="text" name="pincode" placeholder="Pincode"></input><br /><br />
                        <button id="pnb" type="submit">Submit</button>{errormsg}</form>
                </body>
            </div>
        );
    }
}

export default withFirebase(Police1st);
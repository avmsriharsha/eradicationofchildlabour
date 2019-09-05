import '../css/School1st.css';
import data from '../cookedFiles/childData.json';
import React, { Component } from 'react';
import { withFirebase } from './Firebase';

class School1st extends Component {
    constructor(props) {
        super(props);
        this.state = { loginError: false };
    }
    submitHandler = (event) => {
        event.preventDefault();
        var id = event.target.Id.value;
        // if (data.hasOwnProperty(id)) {
        //     const url = "/school/" + id;
        //     this.props.history.push(url);
        // }
        // else
        //     this.setState({ loginError: true });
        this.props.firebase.children().child(id).on('value', snap => {
            const url = "/school/" + id;
            this.props.history.push(url);
           
        }); 
    }


    handleClick = () => {
        this.props.history.push("/");
    }
   schoolnewEntryClick = () => {
        this.props.history.push("/schoolnewEntry");
    }
    render() {
        var errormsg = undefined;

        if (this.state.loginError)
            errormsg = <p id="colour">Invalid id</p>
        else
            errormsg = <p></p>
        return (
            <div className='sch' >
                <h1 id="sch1st">Schools</h1>
                <button id="signouT1" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <body className="body2">
                    <form onSubmit={this.submitHandler}>
                        <input id="na" type="text" name="Id" placeholder="Child Id"></input>
                        <button id="ne" type="submit" value="Search" >Search</button>{errormsg}<br /><br /></form>
                    <button id="ty" type="submit" value="New Entry" onClick={this.schoolnewEntryClick}>New Entry</button><br />
                </body>
            </div>
        );
    }
}

export default withFirebase(School1st);
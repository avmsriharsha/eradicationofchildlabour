import React, {Component} from 'react';
import '../css/Anganwadi1st.css';
class Anganwadi1st extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/anganwadinewEntry");
    }
    submitHandler = (event) => {
        event.preventDefault();
        var id = event.target.Id.value;
        this.props.firebase.children().child(id).on('value', snap => {
            const url = "/angan/" + id;
            this.props.history.push(url);
           
        }); 
    }
    render() {
        var errormsg = undefined;

        if (this.state.loginError)
            errormsg = <p id="colour">Invalid id</p>
        else
            errormsg = <p></p>
        return (
            <div className='angan1'>
                <h1 className="title2">COURTYARD SHELTERS</h1>
                <button id="signout0" type="button" onClick={this.handleClick}>Signout</button>
                <body className="body2">
                <form onSubmit={this.submitHandler}>
                    <input id="an" type="text" name="Id" placeholder="Child Id"></input>
                    <button id="en" type="submit" value="Search" >Search</button>{errormsg}<br /><br /></form>
                    <button id="nwety" type="submit" value="New Entry" onClick={this.anganwadiClick}>New Entry</button><br />
                </body>
            </div> 
        );
    }
}

export default Anganwadi1st;
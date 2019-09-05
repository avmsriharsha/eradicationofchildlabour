import React, { Component } from 'react';
import '../css/report.css';
import * as firebase from 'firebase';
//
//import '../css/reportchild.css'

class ReportChildLabour extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
        value: '',
        sucessMsg: null
      };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var _this = this;
    this.props.firebase.uploadChildPhoto(this.fileInput.current.files[0]).then(function(snapshot) {
        const path = snapshot.metadata.fullPath;
        console.log(path);
        navigator.geolocation.getCurrentPosition(
            position => {
                const longi = position["coords"].longitude;
                const lati = position["coords"].latitude;
                const desc = _this.state.value;
                console.log(desc);
                _this.props.firebase.reportChildLabour(path, desc, lati, longi).then(res => {

                  var storageRef = firebase.storage().ref().child(path);
                  storageRef.getDownloadURL().then(url => {

                    const tempParams = {
                      "senderMail" : "chethanasantoshich@gmail.com",
                      "to_name" : "Vamsi",
                      "desc" : desc,
                      "lat": lati,
                      "long": longi,
                      "photourl": url
                    }
                    _this.sendFeedback("template_5VS1Zp8H", tempParams).then(res => {
                      console.log("email sent succesfully " + res);
                      _this.setState({
                        sucessMsg: "Successfully uploaded and email sent to NGO/activists members."
                    });
                    })
                    // Handle errors here however you like, or use a React error boundary
                    .catch(err => console.error('Failed to send feedback. Error: ', err));
                  });
                });
            },
            error => {console.log(error)},
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
    });
  }

  sendFeedback (templateId, templateParams) {
    return window.emailjs.send(
      'vamsiwmd145@gmail.com',
      templateId,
      templateParams
      )
  }

  render() {
    return (
        <div className='report'> 
      <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
        <br/>
        <label>
          Take a Snap: &nbsp;&nbsp;
          <input type="file" ref={this.fileInput} />
        </label>
        <br/>
        <br/>
        <br/>
        <br/>
        <textarea placeholder="Type your Description" value={this.state.value} onChange={this.handleChange} cols={40} rows={10} />
        <br/>
        <br/>
        <br/>
        <br/>
        <button id="rns" type="submit">Submit</button>
      </form>
      <br/>
      <h1>{this.state.sucessMsg}</h1>
    </div>

    );
  }
}
export default ReportChildLabour;

import React, { Component } from 'react';

class ReportChildLabour extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
        value: 'Enter description.',
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
                    _this.setState({
                        sucessMsg: "Successfully Uploaded."
                    });
                });
            },
            error => {console.log(error)},
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
    });
  }


  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
      <br/>
      <br/>
        <label>
          Take a Snap: &nbsp;&nbsp;
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <br/>
        <br/>
        <textarea value={this.state.value} onChange={this.handleChange} cols={50} rows={10} />
        <br />
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <h1>{this.state.sucessMsg}</h1>
    </div>

    );
  }
}
export default ReportChildLabour;

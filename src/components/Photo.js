import React, { Component } from 'react';
import * as firebase from 'firebase';

class Photo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      "imgurl": null
    };
    this.downloadUrlAndUpdateData(this.props.path)
  }

  downloadUrlAndUpdateData(path){
    var storageRef = firebase.storage().ref().child(path);
        storageRef.getDownloadURL().then(url => {
            console.log(url);
            this.setState({
                "imgurl" : url
            })
        });
  }

  render() {
    return (
      <div>          
            <img src={this.state.imgurl} alt="golf" width={500} height={300}/> 
      </div>
    );
  }
}
export default Photo;


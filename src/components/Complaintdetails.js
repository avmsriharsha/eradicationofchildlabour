import React, { Component } from 'react';
import * as firebase from 'firebase';
import Photo from './Photo';
import '../css/Child.css';


class ChildLabourAdminView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "data":[]
    };
  }


  componentDidMount() {
    var _this = this;
    var reportData = [];
    this.props.firebase.getChildLabourReprots().then(snapshot => {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        reportData.push(childData);
  
      });
      console.log(reportData)
      _this.setState({
        data : reportData
      })
    })
  }

  downloadUrlAndUpdateData(path){
    return firebase.storage().ref().child(path);
  }


  render() {

    return (
      <div>
      {
        this.state.data.map((dynamicData, key) =>
        <table>
        <tr>
         <td className="image">
         <Photo path={dynamicData.photoPath}></Photo>
         </td>
         <td className="des">
           Desc: {dynamicData.description} <br/>
           </td>
           <td className="address">
           <a href="https://www.google.co.in/maps/@13.1467548,80.2910029,14.66z"> View on Map</a><br/>
           Latitude: {dynamicData.latitude}<br/>
           Longitude: {dynamicData.longitude}<br/>
         </td>
         <td className="status">
            <p> status update</p>
         </td>
         </tr>
         </table>
       )
      }
    </div>

    );
  }
}
export default ChildLabourAdminView;

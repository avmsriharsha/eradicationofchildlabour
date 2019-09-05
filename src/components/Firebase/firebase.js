import app from 'firebase/app';
import 'firebase/database';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDd5-eKMRqyBwrEWmtgJ7xIrpVLtFYPXwg",
    authDomain: "child-labour-233104.firebaseapp.com",
    databaseURL: "https://child-labour-233104.firebaseio.com",
    projectId: "child-labour-233104",
    storageBucket: "child-labour-233104.appspot.com",
    messagingSenderId: "705536316412"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.database = app.database();
        //console.log(app.storage());
        console.log("database : " + this.database);
        
    }
    hospitals = () => this.database.ref('hospitals/');
    children = () => this.database.ref('children/');
    schools = () => this.database.ref('schools/');
    anganwadis = () => this.database.ref('anganwadis/'); 
    childLabourRef = () => this.database.ref('childLabour/'); 
    childPhotosStorageRef = () => firebase.storage().ref().child('childs/');

    writeChildDetails = (childAadhar, childName, dob, gender, status, street,city, country, district, fatherAadhar, fatherName, hospitalId,orphanageId,anganwadiId, income, motherAadhar, motherName, phoneNumber, schoolId, state,pincode) => {
        var childId=Math.floor(Math.random()*9000000) + 1000000;
        var id = childId;
        this.database.ref('children/').orderByKey().limitToLast(1); 
        console.log(id); 
        this.children().child(id).set({
            'ChildAadhar': childAadhar,
            'ChildName': childName,
            'Child_DOB': dob,
            'Child_Gender': gender,
            'Child_Status': status,
            'Street':street,
            'City': city,
            'Country': country,
            'District': district,
            'FatherAadhar': fatherAadhar,
            'Father_name': fatherName,
            'Hospital_Id': hospitalId,
            'OrphanageId':orphanageId,
            'AnganwanwadiId':anganwadiId,
            'Income': income,
            'MotherAadhar': motherAadhar,
            'Mother_name': motherName,
            'PhoneNumber': phoneNumber,
            'School_Id': schoolId,
            'State': state,
            'pincode':pincode
        });
    }

    reportChildLabour = (photoPath, desc, lat, long) => {
        return this.childLabourRef().push().set({
            'photoPath' : photoPath,
            'description' : desc,
            'latitude': lat,
            'longitude': long
        });
    }

    uploadChildPhoto = (file) => {
        var fileName = file.name;
        return this.childPhotosStorageRef().child(fileName).put(file);
    }

    getChildLabourReprots(){
        return this.childLabourRef().once('value');
    }
}

export default Firebase;
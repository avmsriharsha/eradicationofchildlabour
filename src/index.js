import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext, withFirebase } from './components/Firebase';
import Login from './components/Login';
import Hospital from './components/Hospital';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register';
import Anganwadi1st from './components/Anganwadi1st';
import forgotpassword from './components/forgotpassword';
import Anganwadi from './components/Anganwadi';
import School1st from './components/School1st';
import AnganwadinewEntry from './components/AnganwadinewEntry';
import School from './components/School';
import Police1st from './components/Police1st';

import Orphanage from './components/Orphanage';
import Govern from './components/Govern'
import MapContainerH from './Maps/hospitalMap';
import MapContainerS from './Maps/schoolMap';
import MapContainerO from './Maps/OrphanageMap';
import MapContainerA from './Maps/AnganwadiMap';
import schoolnewEntry from './components/SchoolnewEntry';
import ReportChildLabour from './components/report';
import reportDetails from './components/Complaintdetails';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={withFirebase(Login)} />
            <Route path="/hospital" component={withFirebase(Hospital)} />
            <Route path="/register" component={withFirebase(Register)} />
            <Route path="/anganwadi1st" component={withFirebase(Anganwadi1st)} />
            <Route path="/anganwadi" component={withFirebase(Anganwadi)} />
            <Route path="/school1st" component={withFirebase(School1st)} />
            <Route path="/school/:id" component={withFirebase(School)} />
            <Route path="/schoolnewEntry" component={withFirebase(schoolnewEntry)} />
            <Route path="/angan/:id" component={withFirebase(School)} />
            <Route path="/anganwadinewEntry" component={withFirebase(AnganwadinewEntry)} />
            <Route path="/orphanage" component={withFirebase(Orphanage)} />
            <Route path='/govern' component={withFirebase(Govern)} />
            <Route path='/hospitalmap' component={withFirebase(MapContainerH)} />
            <Route path='/Orphanagemap' component={withFirebase(MapContainerO)} />
            <Route path='/schoolmap' component={withFirebase(MapContainerS)} />
            <Route path='/anganwadimap' component={withFirebase(MapContainerA)} />
            <Route path="/forgot password" component={withFirebase(forgotpassword)} />
            <Route path="/Police1st" component={withFirebase(Police1st)} />
            <Route path="/report" component={withFirebase(ReportChildLabour)}/>
            <Route path="/viewReports" component={withFirebase(reportDetails)}/>

        </div>
    </Router>
)


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()} >
        {routing}
    </FirebaseContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

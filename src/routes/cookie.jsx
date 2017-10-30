import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';
import Appin from '../templates/appin';
import Appout from '../templates/appout';
import Appindex from '../templates/content';
import Appchart from '../templates/compass';
import Appindex2 from '../templates/contenta';
import Appindex3 from '../templates/contentc';
import Appindex4 from '../templates/contentd';
import Appcontain from '../templates/appcontain';
   

class Routes extends React.Component{
  render() {

    return  (
    
    // <Router history={hashHistory}>
    //       <Route path="/content" component={Appindex} />
    //       <Route path="/contentc" component={Appindex3} />
    //       <Route path="/contenta" component={Appindex2} />

    //   </Router>

    // </Router>
     <Router history={hashHistory}>
          <Route path="/appin" component={Appin} />
          <Route path="/appout" component={Appout} />
          <Route path="/appchart" component={Appchart} />
         <Route path="/" component={Appcontain}>         
         <Route path="/content" component={Appindex} />
          <Route path="/contenta" component={Appindex2} />
          <Route path="/contentc" component={Appindex3} />
         <Route path="/contentd" component={Appindex4} />
      </Route>
    </Router>
      );
     
  }
}


export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import Appimg from './comment';
import Nav from './nav';
import Appindex2 from '../templates/contenta';
import Appindex3 from '../templates/contentc';
import Appindex4 from '../templates/contentd';
import Appindex from '../templates/content';
import 'antd/dist/antd.css';

class Appcontain extends React.Component {
  
  render () {
    return (
      <div >
        <Appimg/>
        <Nav/>
        <div key={this.props.location.pathname}
                     style={{position:"absolute", width: "100%"}}>
          {this.props.children}
          </div>
     
      </div>  
    
    )
  }
}

export default Appcontain;


import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import '../css/index.css';
class Appimg extends React.Component {
  
  render () {
    return (
    
      <div id="aim">
        <h1 id="mail">React</h1>
        <img src={require('../img/react.png')} />
       
      </div>
      
    
    )
  }
}

export default Appimg;


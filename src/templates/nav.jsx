import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import '../css/applist.css';
import Appindex from './content';
import Appchart from './compass';
import Appindex2 from './contenta';
import Appindex3 from './contentc';
import Appindex4 from './contentd';
class Nav extends React.Component {
  
  render () {
    return (
       <div id="header-nav">
        <ul>
          <li><Link to="/content" >简单搜索</Link></li>
          <li><Link to="/contenta" >复杂搜索</Link></li>
          <li><Link to="/contentc" >分类搜索</Link></li>
          <li><Link to="/contentd">我的股票</Link></li>
        </ul>
      </div>
    )
  }
}
export default Nav;
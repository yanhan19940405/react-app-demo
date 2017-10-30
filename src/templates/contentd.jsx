import React from 'react';
import ReactDOM from 'react-dom';
import Appin from './appin';
import Appchart from './compass';
import { Button } from 'antd';
import { Input } from 'antd';
import { Link } from 'react-router';
import 'whatwg-fetch';
import 'es6-promise';
import '../css/applist.css';

class Appindex4 extends React.Component {
  
  render () {
    return (
    <div>
      <Appbutton4/>
      
    </div>
    
    )
  }
}

class Appbutton4 extends React.Component {

constructor () {
    super()
    this.state = {
      username: "",
      password:"",
      flv:""

    }
  }
  componentWillMount (){
    // var result = fetch('https://api.github.com/', { 
   // method: 'GET',
   //  mode: 'cors',
   //  headers: { 'Accept': 'application/json' } });
   //  result.then(res => { return res.json() }).
   //  then(json => { this.setState({username:json.authorizations_url,
   //  password:json.commit_search_url,flv:json.feeds_url })});
function status(response){
    if(response.status>=200 && response.status<300){
        return Promise.resolve(response);
    }
    else{
        return Promise.reject(new Error(response.statusText));
    }
}
function json(response){
    return response.json();
}
fetch("https://api.github.com/")
.then(status)
.then(json)
.then(
    json=>{this.setState({username:json.authorizations_url,
    password:json.commit_search_url,flv:json.feeds_url })}
)
.catch(function(err){
    console.log("Fetch错误:"+err);
});
  }

  render () {
    return (
      <div >
      <ul>
         <li><strong>股票指数:</strong>{this.state.username}</li>
         <li><strong>股票沪深:</strong>{this.state.password}</li>
         <li><strong>股票板块:</strong>{this.state.flv}</li>
      </ul>
      </div>


    )
  }


}

export default Appindex4;


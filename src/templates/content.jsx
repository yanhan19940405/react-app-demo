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
import { Table} from 'antd';




class Appeac extends React.Component {
constructor (props) {
    super(props)

  }
  
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { user } = this.props;
    console.log(user);
    const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age:this.props.user,
    address: `London, Park Lane no. ${i}`,
    
  });
}
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start}
            disabled={!hasSelected} loading={loading}
          >Reload</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `已选中 ${selectedRowKeys.length} 项` : ''}</span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}
class Appindex extends React.Component {
  
  render () {
    return (
    <div>
      
      <Appbutton/>
      
    </div>
    
    )
  }
}

class Appbutton extends React.Component {
constructor () {
    super()
    this.state = {
      user: "",
      ssr:"",
      g:"kevin"

    }
  }
  

 
handleClick() {
        // 使用原生的 DOM API 获取焦
let inputtext=document.getElementById("text").value;
console.log(inputtext)
 let status=function(response){
    if(response.status>=200 && response.status<300){
        return Promise.resolve(response);
    }
    else{
        return Promise.reject(new Error(response.statusText));
    }
 }
 let json=function(response){
  
     return response.json();
   
 }

fetch("https://api.github.com/")
.then(status)
.then(json)
.then(
  
     json=>{
      let inputtext=document.getElementById("text").value
      if(inputtext in json){
      
      this.setState(
      {
        user:json[inputtext],
        ssr:""
      }
      )
  }else if(inputtext==""){
     this.setState(
      {
        ssr:"输入信息为空，请输入详尽搜索内容",
        user:""
      }
      )
    
  }else{
     this.setState(
      {
        ssr:"sry,未能找到相关数据！",
        user:""
      }
      )

  }

}
)   
.catch(function(err){
    console.log("Fetch错误:"+err);
})
   
        }
      

  
  render () {
   
    return (
      <div id="btnb">
      <div className="btn">
      <Input placeholder="请输入搜索内容" className="btn-input" id="text"/>
      <Button type="primary" icon="search" className="btn-btn" ref="btnaction"  id="btn1" onClick={this.handleClick.bind(this)}>简单搜索</Button>
      </div>
      <div id="contain">
         <p><Link to="/appchart">{this.state.user}</Link></p>
         <p>{this.state.ssr}</p>
      </div>
      <Appeac user={this.state.user}/>
      </div>
      

    
    )
  }
}










export default Appindex;


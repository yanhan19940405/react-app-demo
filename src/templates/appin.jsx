import Appimg from './comment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
   constructor () {
    super();
    this.state = {
     
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {

    const { getFieldDecorator } = this.props.form;
    return (
       
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Appimg/>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a id="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" id="login-form-button">
            Log in
          </Button>
          Or <Link to="/appout">注册</Link>
        </FormItem>
      </Form>
    );
  }
}

const Appin = Form.create()(NormalLoginForm);




export default Appin;
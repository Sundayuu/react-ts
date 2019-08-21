import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from 'redux/actions/loginActions';
import { util } from 'utils';
import { Form, Icon, Input, Button, message } from 'antd';
import { history, cache } from 'utils';
import { login } from 'axiosConfig';

import './login.less';

interface loginData {
  userName: string;
  password: string;
}

@connect(
  null,
  dispatch => ({
    handleClick: params => dispatch(loginAction(params))
  })
)
class Login extends Component<any, any> {
  form: any;

  handleSubmit = e => {
    e.preventDefault();
    let base64 = new util.Base64();
    this.props.form.validateFields(async (err, values: loginData) => {
      if (!err) {
        const loginParams: loginData = {
          userName: base64.encode(values.userName),
          password: base64.encode(values.password)
        };
        const res = (await login(loginParams)) as any;
        console.log(res);
        if (res.code === 200) {
          this.props.handleClick(res.data);
          sessionStorage.setItem(cache.LOGIN_DATA, JSON.stringify(res.data));
          history.push('/home');
        } else {
          message.error('网络错误');
        }
      }
    });
  };

  render() {
    console.log(process.env);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-content">
          <div className="login-logo">
            <img src={require('assets/img/logo.png')} alt="" />
            <h2>园区服务管理平台</h2>
          </div>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className="copyrigth">
            <p>© 2019-2020 上海木泰信息科技有限公司 </p>
            <p>版本号：V1.0.0</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Form.create()(Login);

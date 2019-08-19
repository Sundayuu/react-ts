import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrderList } from 'redux/actions/testAction'
import { Form, Icon, Input, Button } from 'antd'
import './login.less'
@connect(
  state => ({
    orderItems: state.testReducer.orderItems
  }),
  dispatch => ({
    handleClick: () => dispatch(getOrderList())
  })
)
class Login extends Component<any, any> {
  form: any

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <div className="login-content">
          <div className="login-logo">
            <img src={require('assets/img/logo.png')} alt="" />
            <h2>园区服务管理平台</h2>
          </div>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
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
                onClick={() => this.props.handleClick()}
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
    )
  }
}
export default Form.create()(Login)

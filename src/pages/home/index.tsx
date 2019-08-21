import React from 'react';
import { Button, Breadcrumb } from 'antd';
import { util } from 'utils';
import store from 'redux/store';

export default class Pages extends React.Component<any, any> {
  render() {
    let token = store.getState();
    return (
      <div>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>订单</Breadcrumb.Item>
          <Breadcrumb.Item>订单管理</Breadcrumb.Item>
          {this.props.edit ? <Breadcrumb.Item>订单列表</Breadcrumb.Item> : null}
          <Breadcrumb.Item>
            {this.props.edit ? '修改订单' : '代客下单'}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1>主页</h1>
        <p>{JSON.stringify(token)}</p>
        <Button type="primary" onClick={() => util.logout()}>
          退出登录
        </Button>
      </div>
    );
  }
}

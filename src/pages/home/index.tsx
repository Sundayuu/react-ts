import React from 'react';
import { Button } from 'antd';
import { util } from 'utils';
import store from 'redux/store';

export default class Pages extends React.Component<any, any> {
  render() {
    let token = store.getState();
    return (
      <div>
        <h1>主页</h1>
        <p>{JSON.stringify(token)}</p>
        <Button type="primary" onClick={() => util.logout()}>
          退出登录
        </Button>
      </div>
    );
  }
}

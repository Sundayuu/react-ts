import React from 'react';
import { Button } from 'antd';
import { util } from 'utils';
export default class Pages extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>主页</h1>
        <Button type="primary" onClick={() => util.logout()}>
          退出登录
        </Button>
      </div>
    );
  }
}

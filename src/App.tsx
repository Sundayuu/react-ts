import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { routeWithSubRoutes } from 'utils';
import { routes } from './router';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
export default class Main extends React.Component<any, any> {
  _menu: any;

  constructor(props) {
    super(props);
    this.state = {
      // 当前浏览器地址匹配的路由path
      matchedPath: ''
    };
  }

  handlePathMatched = path => {
    this.setState({
      matchedPath: path
    });
  };

  componentDidUpdate() {
    // 加一层判断，避免报错影响子组件渲染
    if (document.getElementById('page-content')) {
      document.getElementById('page-content').scrollTop = 0;
    }
  }

  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header style={{ background: '#fff', padding: '0 15px' }}>
          <img
            style={{
              width: 120,
              height: 34
            }}
            src={require('assets/img/logo.png')}
            alt="logo"
          />
        </Header>
        <Layout>
          <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            {routeWithSubRoutes(routes, this.handlePathMatched)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

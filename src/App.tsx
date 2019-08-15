import React from 'react'
import { Layout } from 'antd'
import { routeWithSubRoutes } from 'utils'
import { routes } from './router'
const { Content } = Layout

export default class Main extends React.Component<any, any> {
  _menu: any

  constructor(props) {
    super(props)
    this.state = {
      // 当前浏览器地址匹配的路由path
      matchedPath: ''
    }
  }

  handlePathMatched = path => {
    this.setState({
      matchedPath: path
    })
  }

  componentDidUpdate() {
    // 加一层判断，避免报错影响子组件渲染
    if (document.getElementById('page-content')) {
      document.getElementById('page-content').scrollTop = 0
    }
  }

  render() {
    return (
      <div>
        <Layout>
          {/*头部*/}

          <Layout className="ant-layout-has-sider">
            {/*左侧一级菜单*/}

            {/*左侧二三级菜单*/}

            {/*右侧主操作区域*/}
            <Content>
              <div style={styles.wrapper} id="page-content">
                {routeWithSubRoutes(routes, this.handlePathMatched)}
                <div style={styles.copyright}>
                  © 2019-2020 上海木泰信息科技有限公司 版本号：
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }

  /**
   * 头部的一级菜单刷新后,初始化左侧菜单的展开菜单状态
   * @private
   */
  _onFirstActiveChange = () => {
    this._menu._openKeysChange(['0'])
  }
}

const styles = {
  wrapper: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    height: 'calc(100vh - 64px)',
    position: 'relative',
    overflowY: 'auto'
  },
  copyright: {
    height: 48,
    lineHeight: '60px',
    textAlign: 'center',
    color: '#999'
  }
} as any

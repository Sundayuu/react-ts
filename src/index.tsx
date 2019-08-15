import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ConfigProvider } from 'antd'
import { routeWithSubRoutes, history, noop } from 'utils'
import { homeRoutes } from './router'
import { Router, Route, Switch } from 'react-router-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Main from './App'
import 'moment/locale/zh-cn'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router history={history}>
      <div>
        <Switch>
          {routeWithSubRoutes(homeRoutes, noop)}
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

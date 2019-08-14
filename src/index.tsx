import React from 'react'
import ReactDOM from 'react-dom'
import Route from './Route'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Route />
  </LocaleProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

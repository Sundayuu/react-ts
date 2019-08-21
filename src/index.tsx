import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import { routeWithSubRoutes, history, noop } from 'utils';
import { homeRoutes } from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import NotFound from './components/notFound';
import Main from './App';
import 'style/common.less';
import 'moment/locale/zh-cn';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <div>
          <Switch>
            {routeWithSubRoutes(homeRoutes, noop)}
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

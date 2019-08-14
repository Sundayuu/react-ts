import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import Admin from './Admin'
import App from './App'
// import NotFound from './pages/notFound'
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
      {/* <Route path="/admin" component={Admin} /> */}
      <Route path="/app" component={App} />
      {/* <Route path="/404" component={NotFound} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)

const routes = [
  //首页
  { path: '/', exact: true, asyncComponent: () => import('./pages/test01') }
]

const homeRoutes = [
  { path: '/login', asyncComponent: () => import('./components/login') }
]

export { routes, homeRoutes }
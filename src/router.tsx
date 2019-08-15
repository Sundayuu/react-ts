const routes = [
  //首页
  { path: '/home', exact: true, asyncComponent: () => import('./pages/test01') }
]

const homeRoutes = [
  { path: '/login', asyncComponent: () => import('./pages/test02') }
]

export { routes, homeRoutes }

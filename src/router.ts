const routes = [
  //首页
  { path: '/', exact: true, asyncComponent: () => import('./pages/home') }
];

const homeRoutes = [
  { path: '/login', asyncComponent: () => import('./components/login') }
];

export { routes, homeRoutes };

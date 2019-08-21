const routes = [
  //首页
  { path: '/home', exact: true, asyncComponent: () => import('./pages/home') }
];

const homeRoutes = [
  { path: '/login', asyncComponent: () => import('./components/login') },
  { path: '/notFound', asyncComponent: () => import('./components/notFound') }
];

export { routes, homeRoutes };

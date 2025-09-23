interface IRoutesConfig {
  HOME: IRouteConfig;
  POSTS: IRouteConfig;
}

interface IRouteConfig {
  name: string;
  path: string;
  title: string;
}

export const ROUTES_CONFIG: IRoutesConfig = {
  HOME: {
    name: 'Home',
    path: '',
    title: 'Home Page',
  },
  POSTS: {
    name: 'Posts',
    path: 'posts',
    title: 'Posts',
  },
};

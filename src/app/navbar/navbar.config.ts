import { ROUTES_CONFIG } from '../config/routes.config';

export interface INavRoute {
  name: string;
  path: string;
}

export const NAV_ITEMS: INavRoute[] = [
  {
    name: ROUTES_CONFIG.HOME.name,
    path: ROUTES_CONFIG.HOME.path,
  },
  {
    name: ROUTES_CONFIG.POSTS.name,
    path: ROUTES_CONFIG.POSTS.path,
  },
];

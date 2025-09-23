import { Routes } from '@angular/router';
import { ROUTES_CONFIG } from './routes.config';
import { Home } from './home/home';
import { Posts } from './posts/posts';

export const routes: Routes = [
  {
    path: ROUTES_CONFIG.HOME.path,
    component: Home,
    title: ROUTES_CONFIG.HOME.name,
  },
  {
    path: ROUTES_CONFIG.POSTS.path,
    component: Posts,
    title: ROUTES_CONFIG.POSTS.name,
  },
];

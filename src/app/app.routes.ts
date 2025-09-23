import { Routes } from '@angular/router';
import { ROUTES_CONFIG } from './config/routes.config';
import { Home } from './home/home';
import { PostsPage } from './posts/posts-page/posts-page';

export const routes: Routes = [
  {
    path: ROUTES_CONFIG.HOME.path,
    component: Home,
    title: ROUTES_CONFIG.HOME.name,
  },
  {
    path: ROUTES_CONFIG.POSTS.path,
    component: PostsPage,
    title: ROUTES_CONFIG.POSTS.name,
  },
];

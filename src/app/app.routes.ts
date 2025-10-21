import { Routes } from '@angular/router';
import { ROUTES_CONFIG } from './config/routes.config';
import { Home } from './views/home/home';

export const routes: Routes = [
  {
    path: ROUTES_CONFIG.HOME.path,
    component: Home,
    title: ROUTES_CONFIG.HOME.name,
  },
  {
    path: ROUTES_CONFIG.POSTS.path,
    loadComponent: () => import('./views/posts/components/posts-page/posts-page').then((m) => m.PostsPage),
    title: ROUTES_CONFIG.POSTS.name,
  },
  {
    path: ROUTES_CONFIG.POST_DETAILS.path,
    loadComponent: () =>
      import('./views/posts/components/post-details-page/post-details-page').then((m) => m.PostDetailsPage),
    title: ROUTES_CONFIG.POST_DETAILS.name,
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'english',
    loadComponent: () => import('./feature/english/component/page/english/english.page').then(page => page.EnglishPage)
  }
];

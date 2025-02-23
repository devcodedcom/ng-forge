import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'board',
    loadComponent: () => import('./feature/board/page/board/board.page').then(page => page.BoardPageComponent)
  },
  {
    path: 'english',
    loadComponent: () => import('./feature/english/page/english/english.page').then(page => page.EnglishPageComponent)
  }
];

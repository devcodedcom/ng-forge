import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'board',
    loadComponent: async () => import('./feature/board/page/board/board.page').then(page => page.BoardPageComponent)
  },
  {
    path: 'english',
    loadComponent: async () => import('./feature/english/page/english/english.page').then(page => page.EnglishPageComponent)
  }
];

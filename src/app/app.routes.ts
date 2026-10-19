import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home').then((m) => m.Home),
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos').then((m) => m.Produtos),
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./detalhes').then((m) => m.Detalhes),
  },
  {
    path: 'contato',
    loadComponent: () => import('./contato').then((m) => m.Contato),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

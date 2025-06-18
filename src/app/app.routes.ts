import { Routes } from '@angular/router';

export const routes: Routes = [
 /* {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  */
  {
    path: '',
    loadComponent: () => import('./pages/pokemon-list/pokemon-list.page').then( m => m.PokemonListPage)
  },
  {
    path: 'pokemon-detail/:name',
    loadComponent: () => import('./pages/pokemon-detail/pokemon-detail.page').then( m => m.PokemonDetailPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.page').then( m => m.FavoritesPage)
  },
  
];

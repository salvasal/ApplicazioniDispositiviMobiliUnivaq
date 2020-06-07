import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'listaricette',
        children: [
          {
            path: '',
            loadChildren: () => import('../listaricette/listaricette.module').then( m => m.ListaricettePageModule)
          }
        ]
      },
      {
        path: 'categorie',
        children: [
          {
            path: '',
            loadChildren: () => import('../listacategorie/listacategorie.module').then( m => m.ListacategoriePageModule)
          }
        ]
      },
      {
        path: 'ingredienti',
        children: [
          {
            path: '',
            loadChildren: () => import('../listaingredienti/listaingredienti.module').then( m => m.ListaingredientiPageModule)
          }
        ]
      },
      {
        path: 'preferiti',
        children: [
          {
            path: '',
            loadChildren: () => import('../preferiti/preferiti.module').then( m => m.PreferitiPageModule)
          }
        ]
      },
      {
        path: '',
        loadChildren: () => import('../listaricette/listaricette.module').then( m => m.ListaricettePageModule),
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

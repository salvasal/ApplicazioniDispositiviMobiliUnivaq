import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaricettePage } from './listaricette.page';

const routes: Routes = [
  {
    path: '',
    component: ListaricettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaricettePageRoutingModule {}

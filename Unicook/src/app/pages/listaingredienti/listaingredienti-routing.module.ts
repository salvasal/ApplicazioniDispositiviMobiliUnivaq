import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaingredientiPage } from './listaingredienti.page';

const routes: Routes = [
  {
    path: '',
    component: ListaingredientiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaingredientiPageRoutingModule {}

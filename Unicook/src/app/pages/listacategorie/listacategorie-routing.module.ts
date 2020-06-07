import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacategoriePage } from './listacategorie.page';

const routes: Routes = [
  {
    path: '',
    component: ListacategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacategoriePageRoutingModule {}

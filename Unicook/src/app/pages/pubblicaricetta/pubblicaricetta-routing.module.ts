import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubblicaricettaPage } from './pubblicaricetta.page';

const routes: Routes = [
  {
    path: '',
    component: PubblicaricettaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubblicaricettaPageRoutingModule {}

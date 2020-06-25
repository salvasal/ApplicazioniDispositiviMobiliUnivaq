import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioricettaPage } from './dettaglioricetta.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioricettaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioricettaPageRoutingModule {}

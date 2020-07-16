import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubblicaricettaPage } from './pubblicaricetta.page';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PubblicaricettaPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubblicaricettaPageRoutingModule {}

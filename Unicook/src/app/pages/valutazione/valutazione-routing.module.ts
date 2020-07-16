import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValutazionePage } from './valutazione.page';
import {AuthGuard} from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ValutazionePage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValutazionePageRoutingModule {}

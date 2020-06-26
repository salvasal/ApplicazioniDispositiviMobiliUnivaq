import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValutazionePage } from './valutazione.page';

const routes: Routes = [
  {
    path: '',
    component: ValutazionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValutazionePageRoutingModule {}

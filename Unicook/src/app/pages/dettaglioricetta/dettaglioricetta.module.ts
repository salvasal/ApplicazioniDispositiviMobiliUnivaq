import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioricettaPageRoutingModule } from './dettaglioricetta-routing.module';

import { DettaglioricettaPage } from './dettaglioricetta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioricettaPageRoutingModule
  ],
  declarations: [DettaglioricettaPage]
})
export class DettaglioricettaPageModule {}

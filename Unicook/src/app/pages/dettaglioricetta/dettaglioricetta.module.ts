import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioricettaPageRoutingModule } from './dettaglioricetta-routing.module';

import { DettaglioricettaPage } from './dettaglioricetta.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    DettaglioricettaPageRoutingModule
  ],
  declarations: [DettaglioricettaPage]
})
export class DettaglioricettaPageModule {}

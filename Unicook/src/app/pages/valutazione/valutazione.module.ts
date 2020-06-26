import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValutazionePageRoutingModule } from './valutazione-routing.module';

import { ValutazionePage } from './valutazione.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValutazionePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ValutazionePage]
})
export class ValutazionePageModule {}

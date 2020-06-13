import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubblicaricettaPageRoutingModule } from './pubblicaricetta-routing.module';

import { PubblicaricettaPage } from './pubblicaricetta.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PubblicaricettaPageRoutingModule,
        TranslateModule.forChild(),
        ReactiveFormsModule
    ],
  declarations: [PubblicaricettaPage]
})
export class PubblicaricettaPageModule {}

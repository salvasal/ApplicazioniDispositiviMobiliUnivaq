import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferitiPageRoutingModule } from './preferiti-routing.module';

import { PreferitiPage } from './preferiti.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferitiPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [PreferitiPage]
})
export class PreferitiPageModule {}

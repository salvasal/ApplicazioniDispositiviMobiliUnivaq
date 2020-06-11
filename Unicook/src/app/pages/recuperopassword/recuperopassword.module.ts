import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperopasswordPageRoutingModule } from './recuperopassword-routing.module';

import { RecuperopasswordPage } from './recuperopassword.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperopasswordPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [RecuperopasswordPage]
})
export class RecuperopasswordPageModule {}

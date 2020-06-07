import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaingredientiPageRoutingModule } from './listaingredienti-routing.module';

import { ListaingredientiPage } from './listaingredienti.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaingredientiPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListaingredientiPage]
})
export class ListaingredientiPageModule {}

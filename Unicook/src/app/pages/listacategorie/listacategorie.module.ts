import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacategoriePageRoutingModule } from './listacategorie-routing.module';

import { ListacategoriePage } from './listacategorie.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacategoriePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListacategoriePage]
})
export class ListacategoriePageModule {}

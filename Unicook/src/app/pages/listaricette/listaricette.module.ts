import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaricettePageRoutingModule } from './listaricette-routing.module';

import { ListaricettePage } from './listaricette.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaricettePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ListaricettePage]
})
export class ListaricettePageModule {}

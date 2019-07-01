import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaricettePage } from './listaricette.page';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ListaricettePage,
    children: [
        {
            path: 'listacategorie',
            children: [
                {
                    path: '',
                    loadChildren: '../listacategorie/listacategorie.module#ListacategoriePageModule'
                }
            ]
        },
        {
            path: '',
            redirectTo: 'listaricette/listacategorie',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
  declarations: [ListaricettePage]
})
export class ListaricettePageModule {}

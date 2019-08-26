import { Component, OnInit } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private navController: NavController,
              private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  onDetails() {
    this.navController.navigateRoot('dettaglioricetta');
  }
  async funzioneAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cerca ricette per:',
      buttons: [
          {
        text: 'Difficolta',
        role: 'search for difficult',
        handler: () => {
          console.log('Cerca per difficolta');
        }
      }, {
          text: 'Nome',
          role: 'search for name',
          handler: () => {
            console.log('Cerca per nome');
          }
        }, {
          text: 'Tempo di realizzazione',
          role: 'search for time',
          handler: () => {
            console.log('Cerca per tempo');
          }
        }, {
          text: 'Cancella',
          role: 'destructive',
          handler: () => {
            console.log('cancella');
          }
        }
        ]
    });
    await actionSheet.present();
  }

}

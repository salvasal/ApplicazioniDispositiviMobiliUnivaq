import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-dettaglioricetta',
  templateUrl: './dettaglioricetta.page.html',
  styleUrls: ['./dettaglioricetta.page.scss'],
})
export class DettaglioricettaPage implements OnInit {

  constructor(private navController: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
  }
  backTolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }
  onValutazione() {
    this.navController.navigateRoot('valutazione');
  }
  async funzioneAlert() {
    const alert = await this.alertController.create({
      header: 'Attenzione',
      message: 'Per commentare devi aver effettuato il Login o essere registrato',
      buttons: [
        {
          text: 'Torna alla login',
          handler: () => {
            this.navController.navigateRoot('login');
          }
        }, {
          text: 'Indietro',
        }
      ]
    });
    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-creapubblica',
  templateUrl: './creapubblica.page.html',
  styleUrls: ['./creapubblica.page.scss'],
})
export class CreapubblicaPage implements OnInit {

  constructor(private navController: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }
  cancel() {
    this.navController.back();
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
  /* onpublic() {}; */
}

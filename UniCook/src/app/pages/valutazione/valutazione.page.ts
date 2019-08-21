import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-valutazione',
  templateUrl: './valutazione.page.html',
  styleUrls: ['./valutazione.page.scss'],
})
export class ValutazionePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }

}

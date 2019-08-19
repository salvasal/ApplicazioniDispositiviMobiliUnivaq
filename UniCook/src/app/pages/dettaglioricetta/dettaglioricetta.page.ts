import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dettaglioricetta',
  templateUrl: './dettaglioricetta.page.html',
  styleUrls: ['./dettaglioricetta.page.scss'],
})
export class DettaglioricettaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  backTolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }

}

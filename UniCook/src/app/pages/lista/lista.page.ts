import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  onDetails() {
    this.navController.navigateRoot('dettaglioricetta');
  }

}

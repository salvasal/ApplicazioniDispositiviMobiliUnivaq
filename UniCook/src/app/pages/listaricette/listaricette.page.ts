import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-listaricette',
  templateUrl: './listaricette.page.html',
  styleUrls: ['./listaricette.page.scss'],
})
export class ListaricettePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  onLogin() {
    this.navController.navigateRoot('login');
  }
  onListacategorie() {
    this.navController.navigateRoot('listacategorie');
  }
  onListaingredienti() {
    this.navController.navigateRoot('listaingredienti');
  }
}

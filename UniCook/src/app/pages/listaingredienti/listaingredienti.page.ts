import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-listaingredienti',
  templateUrl: './listaingredienti.page.html',
  styleUrls: ['./listaingredienti.page.scss'],
})
export class ListaingredientiPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }
  onListacategorie() {
    this.navController.navigateRoot('listacategorie');
  }
  /*onSearch() {};*/

}

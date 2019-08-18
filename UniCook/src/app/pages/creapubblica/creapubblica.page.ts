import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-creapubblica',
  templateUrl: './creapubblica.page.html',
  styleUrls: ['./creapubblica.page.scss'],
})
export class CreapubblicaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }
  onrefresh() {
    this.navController.navigateRoot('creapubblica');
  }
  /* onpublic() {}; */
}

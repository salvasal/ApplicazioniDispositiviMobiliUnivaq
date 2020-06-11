import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onLogin() {
    this.navController.navigateRoot('login');
  }

}

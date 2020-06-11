import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-recuperopassword',
  templateUrl: './recuperopassword.page.html',
  styleUrls: ['./recuperopassword.page.scss'],
})
export class RecuperopasswordPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onLogin() {
    this.navController.navigateRoot('login');
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private formLogin: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;
  private loginSubTitleTextError: string;

  constructor(private formbuilder: FormBuilder,
              private translateService: TranslateService,
              private alertController: AlertController,
              private navController: NavController) {
  }

  ngOnInit() {
    this.formLogin = this.formbuilder.group({
      username: ['ludo196', Validators.compose([
        Validators.required
      ])],
      password: ['random01', Validators.compose([
        Validators.required
      ])],
    });
    this.initTranslate();
  }

  onLogin() {
    this.navController.navigateRoot('listaricette');
  }
  onRecovery() {
    this.navController.navigateRoot('login');
  }
  onRegister() {
    this.navController.navigateRoot('registrazione');
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette');
  }
  async showLoginTextError() {
    const alert = await this.alertController.create({
      message: this.loginSubTitleTextError,
      buttons: ['OK']
    });
  }

  async showLoginError() {
    const alert = await this.alertController.create({
      header: this.loginTitle,
      message: this.loginSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  private initTranslate() {
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_SUB_TEXT_TITLE').subscribe((data) => {
      this.loginSubTitleTextError = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }
}

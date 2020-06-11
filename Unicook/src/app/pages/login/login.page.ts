import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Account, UtenteService} from '../../services/utente.service';
import {Utente} from '../../models/utente.models';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private utenteService: UtenteService,
              private alertController: AlertController,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.loginFormModel = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
    this.initTranslate();
  }

  goToListaRicette() {
    this.navController.navigateRoot('tabs/listaricette');
  }

  goToSignIn() {
    this.navController.navigateRoot('registrazione');
  }

  goToPasswordRecovery() {
    this.navController.navigateRoot('recuperopassword');
  }

  login() {
    const account: Account = this.loginFormModel.value;
    this.utenteService.login(account).subscribe((utente: Utente) => {
      this.loginFormModel.reset();
      this.navController.navigateRoot('tabs/listaricette');
    },
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            console.error('login request error: ' + err.status);
            this.showLoginError();
          }
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
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }

}

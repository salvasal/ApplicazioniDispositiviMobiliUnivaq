import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {AlertController, NavController} from '@ionic/angular';
import {UtenteService} from '../../services/utente.service';
/* import {Account, UtenteService} from '../../services/utente.service'; */

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
              private navController: NavController,
              private utenteService: UtenteService) {
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
    this.navController.navigateRoot('listaricette/lista');
    /* const account: Account = this.loginFormModel.value;
    this.utenteService.login(account).subscribe((utente: Utente) => {
          this.loginFormModel.reset();
          this.navController.navigateRoot('listaricette');
        },
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            console.error('login request error: ' + err.status);
            this.showLoginError();
          }
        }); */
  }
  onRecovery() {
    this.navController.navigateRoot('recuperopassword');
  }
  onRegister() {
    this.navController.navigateRoot('registrazione');
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
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

import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Utente} from '../../models/utente.models';
import {UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
  private registrazioneFormModel: FormGroup;
  private registrazioneTitle: string;
  private registrazioneSubTitle: string;
  private registrazioneSuccessTitle: string;
  private registrazioneSuccessSubTitle: string;

  utente: Utente = new Utente();

  sesso: string[] = ['UOMO', 'DONNA'];

  // variabili per mostrare/nascondere la password
  private showPassword = false;
  private showConfirmPassword = false;
  private passwordToggleIcon = 'eye-outline';
  private passwordToggleIconCopy = 'eye-outline';

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private utenteService: UtenteService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.registrazioneFormModel = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      cognome: ['', Validators.compose([Validators.required])],
      datanascita: ['', Validators.compose([Validators.required])],
      sesso: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confermaPassword: ['', Validators.compose([Validators.required])]
    });

    this.initTranslate();
  }

  onLogin() {
    this.navController.navigateRoot('login');
  }

  initTranslate() {
    this.translateService.get('REGISTRATION_ERROR_SUB_TITLE').subscribe((data) => {
      this.registrazioneSubTitle = data;
    });
    this.translateService.get('REGISTRATION_ERROR_TITLE').subscribe((data) => {
      this.registrazioneTitle = data;
    });
    this.translateService.get('REGISTRATION_SUCCESS_SUB_TITLE').subscribe((data) => {
      this.registrazioneSuccessSubTitle = data;
    });
    this.translateService.get('REGISTRATION_SUCCESS_TITLE').subscribe((data) => {
      this.registrazioneSuccessTitle = data;
    });
  }

  // metodo per mostrare/nascondere il contenuto della password
  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye-outline') {
      this.passwordToggleIcon = 'eye-off-outline';
    } else {
      this.passwordToggleIcon = 'eye-outline';
    }
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;

    if (this.passwordToggleIconCopy === 'eye-outline') {
      this.passwordToggleIconCopy = 'eye-off-outline';
    } else {
      this.passwordToggleIconCopy = 'eye-outline';
    }
  }


   createChiaveRecupero(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async createUtenteAlert() {
    const alert = await this.alertController.create({
      header: this.registrazioneSuccessTitle,
      message: this.registrazioneSuccessSubTitle + this.utente.chiaverecupero,
      buttons: [
        {text: 'OK',
          handler: () => {
            this.goListaRicette();
          }
        }
      ]
    });

    await alert.present();
  }

  async erroreCreateUtenteAlert() {
    const alert = await this.alertController.create({
      header: this.registrazioneTitle,
      message: this.registrazioneSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  resetForm() {
    this.registrazioneFormModel.reset();
  }

  goListaRicette() {
    this.navController.navigateRoot('tabs/listaricette');
  }

  onRegister() {
    this.utente.nome = this.registrazioneFormModel.get('nome').value;
    this.utente.cognome = this.registrazioneFormModel.get('cognome').value;
    this.utente.datanascita = this.registrazioneFormModel.get('datanascita').value;
    this.utente.sesso = this.registrazioneFormModel.get('sesso').value;
    this.utente.username = this.registrazioneFormModel.get('username').value;
    this.utente.password = this.registrazioneFormModel.get('password').value;
    this.utente.chiaverecupero = this.createChiaveRecupero(6);
    this.utenteService.insert(this.utente).subscribe( resultData => {
      this.createUtenteAlert();
      this.resetForm();
    }, error => {
      console.log(error);
      this.erroreCreateUtenteAlert();
    });
  }

}

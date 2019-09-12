import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
  private registerForm: FormGroup;
  private registerSubTitle: string;
  // private utente: Utente;

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService) {
              // private modalController: ModalController
              // private navParams: NavParams
  }

  ngOnInit() {
    /* funzione finale
    *
    this.utente = this.navParams.data.appParam;
    this.registerForm = this.formBuilder.group({
      nome: [this.utente.nome, Validators.compose([Validators.required])],
      cognome: [this.utente.cognome, Validators.compose([Validators.required])],
      datanascita: [this.utente.datanascita, Validators.compose([Validators.required])],
      sesso: [this.utente.sesso, Validators.compose([Validators.required])],
      usernamer: [this.utente.username, Validators.compose([Validators.required])],
      passwordGroup: this.formBuilder.group({
        passwordr: [this.utente.password, Validators.compose([Validators.required])],
        pconfirm: [this.utente.password, Validators.compose([Validators.required])],
      })
    });
    this.initTranslate();
    */
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
      ])],
      cognome: ['', Validators.compose([
        Validators.required
      ])],
      datanascita: ['', Validators.compose([
        Validators.required
      ])],
      sesso: ['', Validators.compose([
        Validators.required
      ])],
      usernamer: ['', Validators.compose([
        Validators.required
      ])],
      passwordsGroup: this.formBuilder.group({
        passwordr: ['', Validators.compose([
          Validators.required
        ])],
        pconfirm: ['', Validators.compose([
          Validators.required
        ])],
      })
    });
    this.initTranslate();
  }

  backtologin() {
    this.navController.navigateRoot('login');
  }
  onRegister() {
    this.navController.navigateRoot('login');
    /* come la collego ?
    *
    this.utente.nome = this.registerForm.value.nome;
    this.utente.cognome = this.registerForm.value.cognome;
    this.utente.datanascita = this.registerForm.value.datanascita;
    this.utente.sesso = this.registerForm.value.sesso;
    this.utente.username = this.registerForm.value.usernamer;
    this.utente.password = this.registerForm.value.passwordr && this.registerForm.value.pconfirm;
    * chiave di recupero ?
    */
  }

  private initTranslate() {
    this.translateService.get('REGISTER_ERROR_SUB_TITLE').subscribe((data) => {
      this.registerSubTitle = data;
    });
  }
}

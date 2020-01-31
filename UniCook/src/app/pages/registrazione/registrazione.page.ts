import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
  private registerForm: FormGroup;
  private registerSubTitle: string;
  private utente: Utente;

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private utenteService: UtenteService) {
  }

  ngOnInit() {
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
    this.utente = new Utente();
    this.utente.nome = this.registerForm.value.nome;
    this.utente.cognome = this.registerForm.value.cognome;
    this.utente.datanascita = this.registerForm.value.datanascita;
    this.utente.sesso = this.registerForm.value.sesso;
    this.utente.username = this.registerForm.value.usernamer;
    this.utente.password = this.registerForm.value.passwordr && this.registerForm.value.pconfirm;
    console.log(this.utente);
    this.utenteService.register(this.utente).subscribe(result => {
      this.navController.navigateRoot('login');
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  private initTranslate() {
    this.translateService.get('REGISTER_ERROR_SUB_TITLE').subscribe((data) => {
      this.registerSubTitle = data;
    });
  }
}

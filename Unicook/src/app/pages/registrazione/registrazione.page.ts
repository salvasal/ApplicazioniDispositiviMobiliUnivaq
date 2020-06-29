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
  private registrazioneFormModel: FormGroup;
  private registrazioneTitle: string;
  private registrazioneSubTitle: string;
  private registrazioneSuccessTitle: string;
  private registrazioneSuccessSubTitle: string;

  sesso: string[] = ['UOMO', 'DONNA'];

  // variabili per mostrare/nascondere la password
  private showPassword = false;
  private showConfirmPassword = false;
  private passwordToggleIcon = 'eye-outline';
  private passwordToggleIconCopy = 'eye-outline';

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.registrazioneFormModel = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      cognome: ['', Validators.compose([Validators.required])],
      datanascita: ['', Validators.compose([Validators.required])],
      sesso: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
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

}

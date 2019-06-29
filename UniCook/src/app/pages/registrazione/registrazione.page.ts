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

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService) {
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

  private initTranslate() {
    this.translateService.get('REGISTER_ERROR_SUB_TITLE').subscribe((data) => {
      this.registerSubTitle = data;
    });
  }
}

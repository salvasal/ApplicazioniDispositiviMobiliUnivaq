import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private formLogin: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(private formbuilder: FormBuilder,
              private translateService: TranslateService) {
  }

  ngOnInit() {
    this.formLogin = this.formbuilder.group({
      username: ['username', Validators.compose([
        Validators.required
      ])],
      password: ['password', Validators.compose([
        Validators.required
      ])],
    });
    this.initTranslate();
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

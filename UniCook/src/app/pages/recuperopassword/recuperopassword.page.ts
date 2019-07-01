import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-recuperopassword',
  templateUrl: './recuperopassword.page.html',
  styleUrls: ['./recuperopassword.page.scss'],
})
export class RecuperopasswordPage implements OnInit {
  private formRecuperoPassword: FormGroup;
  private recoveryTitle: string;
  constructor(private formbuilder: FormBuilder,
              private translateService: TranslateService,
              private navController: NavController) { }

  ngOnInit() {
    this.formRecuperoPassword = this.formbuilder.group({
      username: ['ludo196', Validators.compose([
          Validators.required])],
      chiaverecupero: ['c01', Validators.compose([
          Validators.required])],
    });
    this.initTranslate();
  }
  private initTranslate() {
    this.translateService.get('RECOVERY_ERROR_TITLE').subscribe((data) => {
      this.recoveryTitle = data;
    });
  }
 backtologin() {
    this.navController.navigateRoot('login');
 }
 onRecovery() {
 }

}

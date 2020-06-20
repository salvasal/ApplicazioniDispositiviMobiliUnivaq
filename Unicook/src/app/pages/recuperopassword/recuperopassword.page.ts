import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {UtenteService} from '../../services/utente.service';

export interface Recupero {
  username: string;
  chiaverecupero: string;
}

@Component({
  selector: 'app-recuperopassword',
  templateUrl: './recuperopassword.page.html',
  styleUrls: ['./recuperopassword.page.scss'],
})
export class RecuperopasswordPage implements OnInit {

  private recuperoFormModel: FormGroup;
  private recuperoTitle: string;
  private recuperoErrorSubTitle: string;
  private recuperoSubTitle: string;
  private recupero: Recupero;

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private utenteService: UtenteService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.recuperoFormModel = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      chiaverecupero: ['', Validators.compose([Validators.required])]
    });
    this.initTranslate();
  }

  onLogin() {
    this.navController.navigateRoot('login');
  }

  initTranslate() {
    this.translateService.get('RECOVERY_ERROR_SUB_TITLE').subscribe((data) => {
      this.recuperoErrorSubTitle = data;
    });
    this.translateService.get('RECOVERY_ERROR_TITLE').subscribe((data) => {
      this.recuperoTitle = data;
    });
    this.translateService.get('RECOVERY_PASSWORD').subscribe((data) => {
      this.recuperoSubTitle = data;
    });
  }

  recovery() {
    this.recupero = this.recuperoFormModel.value;
    this.utenteService.getAll().subscribe(result => {
      for (const element of result) {
        if (element.username === this.recupero.username && element.chiaverecupero === this.recupero.chiaverecupero) {
          this.showAlertPassword(element.password);
          break;
        }
        if (result.indexOf(element) === result.length - 1) {
          this.showAlert();
        }
      }
    });
  }

  async showAlertPassword(password: string) {
    const alert = await this.alertController.create({
      header: this.recuperoTitle,
      message: this.recuperoSubTitle + password,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: this.recuperoTitle,
      message: this.recuperoErrorSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

}

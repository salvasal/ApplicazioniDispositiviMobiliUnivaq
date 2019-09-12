import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {AlertController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-recuperopassword',
  templateUrl: './recuperopassword.page.html',
  styleUrls: ['./recuperopassword.page.scss'],
})
export class RecuperopasswordPage implements OnInit {
  private formRecuperoPassword: FormGroup;
  private recoveryTitle: string;
  private passwordProva: string;
  // private utente: Utente;
  constructor(private formbuilder: FormBuilder,
              private translateService: TranslateService,
              private navController: NavController,
              private alertController: AlertController) { }

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
 async onRecovery() {
      this.passwordProva = 'random01'; // prova
      const alert = await this.alertController.create({
         header: 'Recupero Password',
         message: 'La tua password e: ' + '<br>' + this.passwordProva, // this.utente.password
         buttons: [{
             text: 'Torna alla Login',
             handler: () => {
                 this.navController.navigateRoot('login');
             }
         }]
     });
      await alert.present();
 }

}

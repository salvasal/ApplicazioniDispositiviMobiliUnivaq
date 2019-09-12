import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {CATEGORIA, DIFFICOLTA, NUM_PERSONE, Ricetta, TEMPI_COTTURA} from '../../model/ricetta.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-creapubblica',
  templateUrl: './creapubblica.page.html',
  styleUrls: ['./creapubblica.page.scss'],
})
export class CreapubblicaPage implements OnInit {
  private difficoltaRicetta = DIFFICOLTA;
  private tempiCotturaRicetta = TEMPI_COTTURA;
  private categoriaRicetta = CATEGORIA;
  private numPersoneRicetta = NUM_PERSONE;
  private ricetta: Ricetta;
  private ricettaFormModel: FormGroup;
  private registerSubTitle: string;
  constructor(private navController: NavController,
              private alertController: AlertController,
              private formBuilder: FormBuilder,
              private translateService: TranslateService) {
              // private modalController: ModalController
              // private navParams: NavParams
  }

  ngOnInit() {
    /* funzione finale
    this.ricetta = this.navParams.data.appParam;
    this.ricettaFormModel = this.formBuilder.group({
    titolo: [this.ricetta.nomericetta, Validators.compose([])],
    descrizione: [this.ricetta.descrizione, Validators.compose([])],
    difficolta: [this.ricetta.difficolta, Validators.compose([])],
    tempocottura: [this.ricetta.tempocottura, Validators.compose([])],
    categoria: [this.ricetta.categoria, Validators.compose([])],
    numpersone: [this.ricetta.numeropersone, Validators.compose([])],
    ingredienti: [this.ricetta.ingredienti, Validators.compose([])],
    preparazione: [this.ricetta.preparazione, Validators.compose([])]
    });
    this.initTranslate();
     */
    this.ricettaFormModel = this.formBuilder.group({
      titolo: ['Spaghetti alle vongole', Validators.compose([Validators.required])],
      descrizione: ['Gli spaghetti alle vongole sono un classico della cucina tradizionale', Validators.compose([Validators.required])],
      difficolta: ['FACILE', Validators.compose([Validators.required])],
      tempocottura: ['20MIN', Validators.compose([Validators.required])],
      categoria: ['PRIMO', Validators.compose([Validators.required])],
      numpersone: ['X2', Validators.compose([Validators.required])],
      ingredienti: ['pasta (300g), vongole (400g), pomodori pachino (50g), sale q.b.', Validators.compose([Validators.required])],
      preparazione: ['Sgusciare le vongole e condire con la pasta una volta cotta.', Validators.compose([Validators.required])]
      });
    this.initTranslate();
  }
  backtolistaricette() {
    this.navController.navigateRoot('listaricette/lista');
  }
  cancel() {
    this.navController.back();
  }
  async funzioneAlert() {
    const alert = await this.alertController.create({
      header: 'Attenzione',
      message: 'Per commentare devi aver effettuato il Login o essere registrato',
      buttons: [
        {
          text: 'Torna alla login',
          handler: () => {
            this.navController.navigateRoot('login');
          }
        }, {
          text: 'Indietro',
        }
      ]
    });
    await alert.present();
  }
  // onpublic() {};
  //
  //
  // devo prevedere anche l'opzione in cui l'utente vuole creare la ricetta ma non è loggato
  // (vedere se è possibile fare un controllo e richiamare la funzioneAlert dentro la funzione onSubmit)
  async onSubmit() {
    console.log('Ricetta Registrata!');
    /*
    this.ricetta.nomericetta = this.ricettaFormModel.value.titolo;
    this.ricetta.descrizione = this.ricettaFormModel.value.descrizione;
    this.ricetta.difficolta = this.ricettaFormModel.value.difficolta;
    this.ricetta.tempocottura = this.ricettaFormModel.value.tempocottura;
    this.ricetta.categoria = this.ricettaFormModel.value.categoria;
    this.ricetta.numeropersone = this.ricettaFormModel.value.numpersone;
    this.ricetta.preparazione = this.ricettaFormModel.value.preparazione;
    await this.modalController.dismiss(this.ricetta);
     */
  }
  private initTranslate() {
    this.translateService.get('REGISTER_ERROR_SUB_TITLE').subscribe((data) => {
      this.registerSubTitle = data;
    });
  }
}

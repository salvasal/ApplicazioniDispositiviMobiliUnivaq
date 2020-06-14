import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Categoria} from '../../models/categoria.models';
import {CategoriaService} from '../../services/categoria.service';
import {Ingrediente} from '../../models/ingrediente.models';
import {PhotoService} from '../../services/photo.service';
import {Ricetta} from '../../models/ricetta.models';
import {UtenteService} from '../../services/utente.service';
import {RicettaService} from '../../services/ricetta.service';

@Component({
  selector: 'app-pubblicaricetta',
  templateUrl: './pubblicaricetta.page.html',
  styleUrls: ['./pubblicaricetta.page.scss'],
})
export class PubblicaricettaPage implements OnInit {
  private creaFormModel: FormGroup;
  private createTitle: string;
  private createSubTitle: string;
  private createSuccessTitle: string;
  private createSuccessSubTitle: string;

  ricetta: Ricetta = new Ricetta();
  today: Date;
  date: string;
  time: string;

  difficolta: string[] = ['FACILE', 'MEDIO', 'DIFFICILE'];
  tempocottura: number[] = [30, 60, 90, 120];
  categorie: Categoria[] = [];
  ingredienti: Ingrediente[] = [{ IDingrediente: 0, nome: 'Pomodorini' },
    { IDingrediente: 1, nome: 'Sale' },
    { IDingrediente: 2, nome: 'Pepe' },
    { IDingrediente: 3, nome: 'Pane' },
    { IDingrediente: 4, nome: 'Olio extravergine'} ];

  constructor(private navController: NavController,
              private formBuilder: FormBuilder,
              private alertController: AlertController,
              private translateService: TranslateService,
              private categoriaService: CategoriaService,
              private utenteService: UtenteService,
              private ricettaService: RicettaService,
              public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();
    this.initTranslate();

    this.creaFormModel = this.formBuilder.group({
      nomericetta: ['', Validators.compose([Validators.required])],
      descrizione: ['', Validators.compose([Validators.required])],
      difficolta: ['', Validators.compose([Validators.required])],
      tempocottura: ['', Validators.compose([Validators.required])],
      categoria: ['', Validators.compose([Validators.required])],
      ingredienti: ['', Validators.compose([Validators.required])],
      preparazione: ['', Validators.compose([Validators.required])],
    });

    this.categoriaService.getAll().subscribe(result => {
      this.categorie = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });

    /*
    this.ingredienteService.getAll().subscribe(result => {
      this.ingredienti = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
    */

  }

  onSubmit() {
    // tslint:disable-next-line:triple-equals
    if ( this.photoService.photos.length == 0 ) {
      this.showCreateError();
    } else {
      this.ricetta = this.creaFormModel.value;
      this.today = new Date();
      this.date = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
      this.time = this.today.getHours() + ':' + this.today.getMinutes() + ':' + this.today.getSeconds();
      this.ricetta.data = this.date;
      this.ricetta.ora = this.time;
      this.ricetta.immagini = this.photoService.photos;
      this.utenteService.getUtente().subscribe( result => {
        this.ricetta.utente = result;
        this.ricettaService.insert(this.ricetta).subscribe(resultData => {
          console.log(resultData);
          this.photoService.removeData();
          this.showCreateSuccess();
          this.resetForm();
          // tslint:disable-next-line:no-shadowed-variable
        }, error => {
          console.log(error);
        });
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        console.log(error);
      });
    }
  }

  async showCreateSuccess() {
    const alert = await this.alertController.create({
      header: this.createSuccessTitle,
      message: this.createSuccessSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showCreateError() {
    const alert = await this.alertController.create({
      header: this.createTitle,
      message: this.createSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  private initTranslate() {
    this.translateService.get('CREATE_ERROR_SUB_TITLE').subscribe((data) => {
      this.createSubTitle = data;
    });
    this.translateService.get('CREATE_ERROR_TITLE').subscribe((data) => {
      this.createTitle = data;
    });
    this.translateService.get('CREATE_SUCCESS_SUB_TITLE').subscribe((data) => {
      this.createSuccessSubTitle = data;
    });
    this.translateService.get('CREATE_SUCCESS_TITLE').subscribe((data) => {
      this.createSuccessTitle = data;
    });
  }

  goToListaRicette() {
    this.navController.navigateRoot('tabs/listaricette');
  }

  resetForm() {
    this.creaFormModel.reset();
    this.photoService.photos = [];
    this.photoService.removeData();
  }

}

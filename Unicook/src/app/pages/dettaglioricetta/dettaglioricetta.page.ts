import { Component, OnInit } from '@angular/core';
import {Ricetta} from '../../models/ricetta.models';
import {ActivatedRoute, Router} from '@angular/router';
import {RicettaService} from '../../services/ricetta.service';
import {PreferitoService} from '../../services/preferito.service';
import {UtenteService} from '../../services/utente.service';
import {Utente} from '../../models/utente.models';
import {Preferito} from '../../models/preferito.models';
import {AlertController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dettaglioricetta',
  templateUrl: './dettaglioricetta.page.html',
  styleUrls: ['./dettaglioricetta.page.scss'],
})
export class DettaglioricettaPage implements OnInit {
  private createTitle: string;
  private createSubTitle: string;
  private createDeleteTitle: string;
  private createDeleteSubTitle: string;

  id = null;
  ricetta: Ricetta = new Ricetta();
  isPreferito = false;
  utente: Utente = new Utente();
  preferito: Preferito = new Preferito();
  today: Date;

  constructor(private activatedRoute: ActivatedRoute,
              private ricettaService: RicettaService,
              private preferitoService: PreferitoService,
              private utenteService: UtenteService,
              private router: Router,
              private alertController: AlertController,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.initTranslate();

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ricettaService.get(this.id).subscribe(result => {
      this.ricetta = result;
    }, error => {
      console.error(error);
    });

    /*this.utente = this.utenteService.getUtente().value;

    this.preferitoService.getAll().subscribe(result => {
      for (const element of result) {
        if ( element.ricetta === this.ricetta && element.utente === this.utente ) {
          this.isPreferito = true;
        }
      }
    });*/
  }

  goToListaRicette() {
    this.router.navigate(['/tabs/listaricette']);
  }

  goToValutazione() {
    this.router.navigate(['/valutazione', this.id]);
  }

  insertPreferito() {
    /*if (this.utente != null) {
      this.today = new Date();
      this.preferito.data = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
      this.preferito.utente = this.utente;
      this.preferito.ricetta = this.ricetta;
      this.preferitoService.insert(this.preferito).subscribe(result => {
        this.isPreferito = true;
        this.preferito = null;
        this.showSuccess();
      }, error => {
        console.error(error);
      });
    } else {
      this.router.navigate(['/login']);
    }*/
  }

  deletePreferito() {
    /*if (this.utente != null) {
      this.preferitoService.getAll().subscribe(result => {
        for (const element of result) {
          if (element.ricetta === this.ricetta && element.utente === this.utente) {
            this.preferitoService.delete(element.IDpreferito).subscribe(next => {
             this.isPreferito = false;
              this.showDelete();
            }, error => {
              console.error(error);
            });
          }
        }
      }, error => {
        console.error(error);
      });
    } else {
      this.router.navigate(['/login']);
    }*/
  }

  async showSuccess() {
    const alert = await this.alertController.create({
      header: this.createTitle,
      message: this.createSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showDelete() {
    const alert = await this.alertController.create({
      header: this.createDeleteTitle,
      message: this.createDeleteSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  private initTranslate() {
    this.translateService.get('PREFERITO_INSERTED').subscribe((data) => {
      this.createSubTitle = data;
    });
    this.translateService.get('PREFERITO_INSERTED_TITLE').subscribe((data) => {
      this.createTitle = data;
    });
    this.translateService.get('PREFERITO_DELETED').subscribe((data) => {
      this.createDeleteSubTitle = data;
    });
    this.translateService.get('PREFERITO_DELETED_TITLE').subscribe((data) => {
      this.createDeleteTitle = data;
    });
  }
}

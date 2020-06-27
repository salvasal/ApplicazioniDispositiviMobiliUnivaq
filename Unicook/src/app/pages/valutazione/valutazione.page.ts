import { Component, OnInit } from '@angular/core';
import {Ricetta} from '../../models/ricetta.models';
import {ActivatedRoute, Router} from '@angular/router';
import {RicettaService} from '../../services/ricetta.service';
import {ValutazioneService} from '../../services/valutazione.service';
import {Valutazione} from '../../models/valutazione.models';
import {Utente} from '../../models/utente.models';
import {UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-valutazione',
  templateUrl: './valutazione.page.html',
  styleUrls: ['./valutazione.page.scss'],
})
export class ValutazionePage implements OnInit {
  id = null;
  ricetta: Ricetta = new Ricetta();
  likes: Valutazione[] = [];
  unlikes: Valutazione[] = [];
  isEvaluateLike = false;
  isEvaluateUnlike = false;
  utente: Utente = new Utente();
  valutazione: Valutazione = new Valutazione();
  today: Date;
  evaluationCurrent: number;

  constructor(private activatedRoute: ActivatedRoute,
              private ricettaService: RicettaService,
              private router: Router,
              private valutazioneService: ValutazioneService,
              private utenteService: UtenteService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ricettaService.get(this.id).subscribe(result => {
      this.ricetta = result;
      this.getNumberLikesUnlikes();
    }, error => {
      console.error(error);
    });

    this.utente = this.utenteService.getUtente().value;

    this.valutazioneService.getAll().subscribe(result => {
      for (const element of result) {
        if (element.ricetta.IDricetta === this.ricetta.IDricetta && element.utente.IDutente === this.utente.IDutente) {
          if (element.like === true) {
            this.isEvaluateLike = true;
            this.evaluationCurrent = element.IDvalutazione;
          } else {
            this.isEvaluateUnlike = true;
            this.evaluationCurrent = element.IDvalutazione;
          }
        }
      }
    }, error => {
      console.error(error);
    });
  }

  getNumberLikesUnlikes() {
    this.valutazioneService.getAll().subscribe(result => {
      for (const element of result) {
        if (element.ricetta.IDricetta === this.ricetta.IDricetta && element.like === true ) {
          this.likes.push(element);
        }
        if (element.ricetta.IDricetta === this.ricetta.IDricetta && element.unlike === true ) {
          this.unlikes.push(element);
        }
      }
    }, error => {
      console.error(error);
    });
  }

  insertLike() {
    this.valutazione.like = true;
    this.valutazione.unlike = false;
    this.valutazione.utente = this.utente;
    this.valutazione.ricetta = this.ricetta;
    this.today = new Date();
    this.valutazione.data = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
    this.valutazioneService.insert(this.valutazione).subscribe(result => {
      this.getNumberLikesUnlikes();
      this.deleteUnlike();
      this.isEvaluateLike = true;
      this.valutazione = null;
    }, error => {
      console.error(error);
    });
  }

  insertUnlike() {
    this.valutazione.like = false;
    this.valutazione.unlike = true;
    this.valutazione.utente = this.utente;
    this.valutazione.ricetta = this.ricetta;
    this.today = new Date();
    this.valutazione.data = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
    this.valutazioneService.insert(this.valutazione).subscribe(result => {
      this.getNumberLikesUnlikes();
      this.deleteLike();
      this.isEvaluateUnlike = true;
      this.valutazione = null;
    }, error => {
      console.error(error);
    });
  }

  deleteLike() {
    this.valutazioneService.delete(this.evaluationCurrent).subscribe(result => {
      this.getNumberLikesUnlikes();
      this.isEvaluateLike = false;
    });
  }

  deleteUnlike() {
    this.valutazioneService.delete(this.evaluationCurrent).subscribe(result => {
      this.getNumberLikesUnlikes();
      this.isEvaluateUnlike = false;
    });
  }

  goToDettaglioRicetta() {
    this.router.navigate(['/dettaglioricetta', this.id]);
  }

}

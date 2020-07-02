import { Component, OnInit } from '@angular/core';
import {Preferito} from '../../models/preferito.models';
import {Utente} from '../../models/utente.models';
import {PreferitoService} from '../../services/preferito.service';
import {UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage implements OnInit {

  preferiti: Preferito[] = [];
  private utente: Utente = new Utente();

  constructor(private preferitoService: PreferitoService,
              private utenteService: UtenteService) { }

  ngOnInit() {
    this.utente = this.utenteService.getUtente().value;

    this.preferitoService.getAll().subscribe(result => {
      for (const element of result) {
        if ( element.utente === this.utente ) {
          this.preferiti.push(element);
        }
      }
    }, error => {
      console.error(error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Ricetta} from '../../models/ricetta.models';
import {RicettaService} from '../../services/ricetta.service';

@Component({
  selector: 'app-listaricette',
  templateUrl: './listaricette.page.html',
  styleUrls: ['./listaricette.page.scss'],
})
export class ListaricettePage implements OnInit {

  private ricette: Ricetta[] = [];
  private ricetteFiltered: Ricetta[] = [];

  constructor(private ricettaService: RicettaService) { }

  ngOnInit() {
    this.ricettaService.getAll().subscribe(result => {
      this.ricette = result;
      this.ricetteFiltered = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

  getListFiltered(event) {
    const val = event.target.value; // recupera il valore immesso dall'utente
    if (val && val.trim() !== '') {
      this.ricetteFiltered = this.ricette.filter( (element) => {
        return element.nomericetta.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      console.log(this.ricetteFiltered);
    } else { this.ricetteFiltered = this.ricette; }
  }

}

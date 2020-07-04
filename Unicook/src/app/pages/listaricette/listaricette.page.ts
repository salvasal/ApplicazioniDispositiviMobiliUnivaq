import {Component, OnInit} from '@angular/core';
import {Ricetta} from '../../models/ricetta.models';
import {RicettaService} from '../../services/ricetta.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Categoria} from '../../models/categoria.models';

@Component({
  selector: 'app-listaricette',
  templateUrl: './listaricette.page.html',
  styleUrls: ['./listaricette.page.scss'],
})
export class ListaricettePage implements OnInit {
  private currentCategoria: Categoria = null;

  private ricette: Ricetta[] = [];
  private ricetteFiltered: Ricetta[] = [];

  constructor(private ricettaService: RicettaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentCategoria = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.currentCategoria);
        this.ricetteFiltered = this.ricette.filter( (element) => {
          return element.categoria.nome.toLowerCase().indexOf(this.currentCategoria.nome.toLowerCase()) > -1;
        });
        this.currentCategoria = null;
      } else {
          console.log(this.ricette);
          this.ricetteFiltered = this.ricette;
      }
    });

    this.ricettaService.getAll().subscribe(result => {
      this.ricette = result;
      this.ricetteFiltered = result;
      console.log(this.ricette);
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

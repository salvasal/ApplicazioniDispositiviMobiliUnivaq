import { Component, OnInit } from '@angular/core';
import {Ingrediente} from '../../models/ingrediente.models';
import {IngredienteService} from '../../services/ingrediente.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-listaingredienti',
  templateUrl: './listaingredienti.page.html',
  styleUrls: ['./listaingredienti.page.scss'],
})
export class ListaingredientiPage implements OnInit {
  ingredienti: Ingrediente[] = [];
  selectedArray: Ingrediente[] = [];

  constructor(private ingredienteService: IngredienteService,
              private router: Router) { }

  ngOnInit() {
    this.ingredienteService.getAll().subscribe(result => {
      this.ingredienti = result;
      this.order();
    }, error => {
      console.error(error);
    });
  }

  order(){
    this.ingredienti.sort((a, b): number => {
      if (a.nome < b.nome) { return -1; }
      if (a.nome > b.nome) { return 1; }
      return 0;
    });
  }

  selectMember(data, event){
    if (!event.target.checked) {
      this.selectedArray.push(data);
    } else {
      const newArray = this.selectedArray.filter(el => {
        return el.IDingrediente !== data.IDingrediente;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }

  filterRicette() {
    const navigationExtras: NavigationExtras = { state: { data: this.selectedArray } };
    this.router.navigate(['/tabs/listaricette'], navigationExtras);
  }

}

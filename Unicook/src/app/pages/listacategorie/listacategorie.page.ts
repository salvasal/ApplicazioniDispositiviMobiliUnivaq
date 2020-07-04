import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/categoria.models';
import {CategoriaService} from '../../services/categoria.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-listacategorie',
  templateUrl: './listacategorie.page.html',
  styleUrls: ['./listacategorie.page.scss'],
})
export class ListacategoriePage implements OnInit {
  categorie: Categoria[] = [];

  constructor(private categoriaService: CategoriaService,
              private router: Router) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(result => {
      this.categorie = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

  filterRicette(categoria) {
    const navigationExtras: NavigationExtras = { state: { data: categoria } };
    this.router.navigate(['/tabs/listaricette'], navigationExtras);
  }

}

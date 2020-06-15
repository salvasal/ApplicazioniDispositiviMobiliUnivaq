import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/categoria.models';
import {CategoriaService} from '../../services/categoria.service';

@Component({
  selector: 'app-listacategorie',
  templateUrl: './listacategorie.page.html',
  styleUrls: ['./listacategorie.page.scss'],
})
export class ListacategoriePage implements OnInit {
  categorie: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(result => {
      this.categorie = result;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

}

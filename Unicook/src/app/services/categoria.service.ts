import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Categoria} from '../models/categoria.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  // NOTABENE, RIMUOVERE QUESTA DICHIARAZIONE QUANDO IL SERVER SARà PRONTO E ANCHE IMPORT DI OF
  private categorie: Categoria[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    // return this.http.get<Categoria[]>(URL_API.allCategorie);

    // tslint:disable-next-line:label-position
    this.categorie = [{ IDcategoria: 0, nome: 'Antipasto' },
      { IDcategoria: 1, nome: 'Primo' },
      { IDcategoria: 2, nome: 'Secondo' },
      { IDcategoria: 3, nome: 'Contorno' },
      { IDcategoria: 4, nome: 'Dolce'} ];
    return of(this.categorie);
  }

  get(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(URL_API.singleCategoria(id));
  }

  insert(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(URL_API.insertCategoria, categoria);
  }

  update(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(URL_API.singleCategoria(categoria.IDcategoria), categoria);
  }

  delete(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(URL_API.singleCategoria(id));
  }
}

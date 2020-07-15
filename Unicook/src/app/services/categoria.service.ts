import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categoria} from '../models/categoria.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(URL_API.allCategorie);
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

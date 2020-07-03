import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Ingrediente} from '../models/ingrediente.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  ingredienti: Ingrediente[] = [{IDingrediente: 0, nome: 'Formaggio'},
    {IDingrediente: 1, nome: 'Salumi'},
    {IDingrediente: 2, nome: 'Uova'},
    {IDingrediente: 3, nome: 'Pasta'},
    {IDingrediente: 4, nome: 'Guanciale'},
    {IDingrediente: 5, nome: 'Pecorino'},
    {IDingrediente: 6, nome: 'Carne'},
    {IDingrediente: 7, nome: 'Sale'},
    {IDingrediente: 8, nome: 'Pepe'},
    {IDingrediente: 9, nome: 'Zucchine'},
    {IDingrediente: 10, nome: 'Mascarpone'},
    {IDingrediente: 11, nome: 'Cacao'},
    {IDingrediente: 12, nome: 'Caffe'},
    {IDingrediente: 13, nome: 'Savoiardi'}];

  constructor(private http: HttpClient) { }

  // metodo per recuperare tutti gli ingredienti
  getAll(): Observable<Ingrediente[]> {
    // return this.http.get<Ingrediente[]>(URL_API.allIngredienti);
    return of(this.ingredienti);
  }

  // metodo per recuperare un ingrediente passando come parametro il codice identificativo
  get(id: number): Observable<Ingrediente> {
    return this.http.get<Ingrediente>(URL_API.singleIngrediente(id));
  }

  // metodo per inserire un ingrediente passato come parametro
  insert(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(URL_API.insertIngrediente, ingrediente);
  }

  // metodo per aggiornare un ingrediente passato come parametro
  // primo parametro: url per recuperare l'ingrediente mediante il suo id
  // secondo parametro: ingrediente aggiornato rispetto alla versione vecchia nel db
  update(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.put<Ingrediente>(URL_API.singleIngrediente(ingrediente.IDingrediente), ingrediente);
  }

  // metodo per cancellare un ingrediente passato come parametro con il suo codice identificativo
  delete(id: number): Observable<Ingrediente> {
    return this.http.delete<Ingrediente>(URL_API.singleIngrediente(id));
  }
}



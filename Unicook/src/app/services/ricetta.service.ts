import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ricetta} from '../models/ricetta.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RicettaService {

  constructor(private http: HttpClient) { }

  // Metodo che permette di recuperare tutte le ricette
  getAll(): Observable<Ricetta[]> {
    return this.http.get<Ricetta[]>(URL_API.allRicette);
  }

  // Metodo che permette di recuperare una ricetta passando come parametro il codice identificativo
  get(id: number): Observable<Ricetta> {
    return this.http.get<Ricetta>(URL_API.singleRicetta(id));
  }

  // Metodo che permette di inserire una ricetta passata come parametro
  insert(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.post<Ricetta>(URL_API.insertRicetta, ricetta);
  }

  // Metodo che permette di aggiornare una ricetta passata come parametro
  // con il metodo put, dove il primo parametro è la Url che recupera la ricetta mediante il codice identificativo
  // mentre il secondo parametro è la ricetta aggiornata rispetto alla versione vecchia presente nel database
  update(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.put<Ricetta>(URL_API.singleRicetta(ricetta.IDricetta), ricetta);
  }

  // Metodo che permette di eliminare una ricetta passando come parametro il suo codice identificativo
  delete(id: number): Observable<Ricetta> {
    return this.http.delete<Ricetta>(URL_API.singleRicetta(id));
  }
}

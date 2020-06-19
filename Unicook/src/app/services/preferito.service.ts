import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Preferito} from '../models/preferito.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PreferitoService {

  constructor(private http: HttpClient) { }

  // metodo che permette di recuperare tutte le ricette preferite
  getAll(): Observable<Preferito[]> {
    return this.http.get<Preferito[]>(URL_API.allPreferite);
  }

  // metodo che permette di recuperare una ricetta preferita tramite il suo id
  get(id: number): Observable<Preferito> {
    return this.http.get<Preferito>(URL_API.singlePreferita(id));
  }

  // metodo per inserire una ricetta preferita passandola per parametro
  insert(preferito: Preferito): Observable<Preferito> {
    return  this.http.post<Preferito>(URL_API.insertPreferita, preferito);
  }

  // metodo per aggiornare una ricetta preferita passata come parametro
  // primo parametro: url per recuperare il preferito mediante id
  // secondo parametro: preferito aggiornato rispetto alla versione vecchia nel db
  update(preferito: Preferito): Observable<Preferito> {
    return this.http.put<Preferito>(URL_API.singlePreferita(preferito.IDpreferito), preferito);
  }

  // metodo per cancellare una ricetta preferita passata come parametro mediante il suo id
  delete(id: number): Observable<Preferito> {
    return this.http.delete<Preferito>(URL_API.singlePreferita(id));
  }
}

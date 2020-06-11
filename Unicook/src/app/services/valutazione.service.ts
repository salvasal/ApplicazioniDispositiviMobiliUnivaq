import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Valutazione} from '../models/valutazione.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ValutazioneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Valutazione[]> {
    return this.http.get<Valutazione[]>(URL_API.allValutazioni);
  }

  get(id: number): Observable<Valutazione> {
    return this.http.get<Valutazione>(URL_API.singleValutazione(id));
  }

  insert(valutazione: Valutazione): Observable<Valutazione> {
    return this.http.post<Valutazione>(URL_API.insertValutazione, valutazione);
  }

  update(valutazione: Valutazione): Observable<Valutazione> {
    return this.http.put<Valutazione>(URL_API.singleValutazione(valutazione.IDvalutazione), valutazione);
  }

  delete(id: number): Observable<Valutazione> {
    return this.http.delete<Valutazione>(URL_API.singleValutazione(id));
  }

}

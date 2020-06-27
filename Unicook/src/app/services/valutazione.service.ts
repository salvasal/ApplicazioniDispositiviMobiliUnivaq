import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Valutazione} from '../models/valutazione.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ValutazioneService {

  private valutazioni: Valutazione[] = [
    { IDvalutazione: 0,
      data: '27/06/2020',
      like: true,
      unlike: false,
      utente: {
        IDutente: 0,
        username: 'lorsalvi',
        password: 'ciao',
        chiaverecupero: 'chiave1',
        nome: '',
        cognome: '',
        sesso: '',
        datanascita: ''
      },
      ricetta: {
        IDricetta: 0,
        nomericetta: 'Antipasto misto',
        descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
        preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
        tempocottura: 10,
        difficolta: 'MEDIO',
        data: '24/06/2020',
        ora: '18:30',
        categoria: { IDcategoria: 0, nome: 'Antipasti' },
        ingredienti: [{ IDingrediente: 0, nome: 'Formaggio'},
          { IDingrediente: 1, nome: 'Salumi'}],
        immagini: [{ filepath: '', webviewPath: 'assets/images/antipasto.jpg', base64: ''}],
        utente: {
          IDutente: 0,
          username: 'lorsalvi',
          password: 'ciao',
          chiaverecupero: 'chiave1',
          nome: '',
          cognome: '',
          sesso: '',
          datanascita: ''
        }}}, {
      IDvalutazione: 1,
      data: '25/06/2020',
      like: false,
      unlike: true,
      utente: {
        IDutente: 0,
        username: 'lorsalvi',
        password: 'ciao',
        chiaverecupero: 'chiave1',
        nome: '',
        cognome: '',
        sesso: '',
        datanascita: ''
      },
      ricetta: {
        IDricetta: 0,
        nomericetta: 'Antipasto misto',
        descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
        preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
        tempocottura: 10,
        difficolta: 'MEDIO',
        data: '24/06/2020',
        ora: '18:30',
        categoria: { IDcategoria: 0, nome: 'Antipasti' },
        ingredienti: [{ IDingrediente: 0, nome: 'Formaggio'},
          { IDingrediente: 1, nome: 'Salumi'}],
        immagini: [{ filepath: '', webviewPath: 'assets/images/antipasto.jpg', base64: ''}],
        utente: {
          IDutente: 0,
          username: 'lorsalvi',
          password: 'ciao',
          chiaverecupero: 'chiave1',
          nome: '',
          cognome: '',
          sesso: '',
          datanascita: ''
        }}}
  ];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Valutazione[]> {
    // return this.http.get<Valutazione[]>(URL_API.allValutazioni);
    return of(this.valutazioni);
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

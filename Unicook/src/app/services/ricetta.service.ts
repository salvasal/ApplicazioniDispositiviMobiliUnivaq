import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Ricetta} from '../models/ricetta.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RicettaService {

  /*private listaRicetta: Ricetta[] = [{
    idricetta: 0,
    nomericetta: 'Antipasto misto',
    descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
    preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
    tempocottura: 10,
    difficolta: 'MEDIO',
    data: '24/06/2020',
    ora: '18:30',
    categoria: { id: 0, nome: 'Antipasti' },
    ingredienti: [{ IDingrediente: 0, nome: 'Formaggio'},
      { IDingrediente: 1, nome: 'Salumi'}],
    immagini: [{ filepath: '', webviewpath: 'assets/images/antipasto.jpg', base64: ''}],
    utente: {
      idutente: 0,
      username: 'lorsalvi',
      password: 'ciao',
      chiaverecupero: 'chiave1',
      nome: '',
      cognome: '',
      sesso: '',
      datanascita: ''
    }}, {
    idricetta: 1,
    nomericetta: 'Carbonara',
    descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
    preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
    tempocottura: 30,
    difficolta: 'FACILE',
    data: '24/06/2020',
    ora: '18:30',
    categoria: { id: 1, nome: 'Primi Piatti' },
    ingredienti: [{ IDingrediente: 2, nome: 'Uova'},
      { IDingrediente: 3, nome: 'Pasta'},
      { IDingrediente: 4, nome: 'Guanciale'},
      { IDingrediente: 5, nome: 'Pecorino'}],
    immagini: [{ filepath: '', webviewpath: 'assets/images/primo.jpg', base64: ''}],
    utente: {
      idutente: 0,
      username: 'lorsalvi',
      password: 'ciao',
      chiaverecupero: 'chiave1',
      nome: '',
      cognome: '',
      sesso: '',
      datanascita: ''
    }}, {
    idricetta: 2,
    nomericetta: 'Bistecca ai ferri',
    descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
    preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
    tempocottura: 20,
    difficolta: 'FACILE',
    data: '24/06/2020',
    ora: '18:30',
    categoria: { id: 2, nome: 'Secondi Piatti' },
    ingredienti: [{ IDingrediente: 6, nome: 'Carne'},
      { IDingrediente: 7, nome: 'Sale'},
      { IDingrediente: 8, nome: 'Pepe'}],
    immagini: [{ filepath: '', webviewpath: 'assets/images/secondo.jpeg', base64: ''}],
    utente: {
      idutente: 0,
      username: 'lorsalvi',
      password: 'ciao',
      chiaverecupero: 'chiave1',
      nome: '',
      cognome: '',
      sesso: '',
      datanascita: ''
    }}, {
    idricetta: 3,
    nomericetta: 'Bastoncini di zucchine',
    descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
    preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
    tempocottura: 15,
    difficolta: 'DIFFICILE',
    data: '24/06/2020',
    ora: '18:30',
    categoria: { id: 3, nome: 'Contorni' },
    ingredienti: [{ IDingrediente: 9, nome: 'Zucchine'}],
    immagini: [{ filepath: '', webviewpath: 'assets/images/contorno.jpg', base64: ''}],
    utente: {
      idutente: 0,
      username: 'lorsalvi',
      password: 'ciao',
      chiaverecupero: 'chiave1',
      nome: '',
      cognome: '',
      sesso: '',
      datanascita: ''
    }}, {
    idricetta: 4,
    nomericetta: 'Tiramisu',
    descrizione: 'Questa è una ricetta fake per verificare se il contenuto del campo descrizione sia totalmente leggibile',
    preparazione: 'Questa è una ricetta fake per verificare se il contenuto del campo preparazione sia totalmente leggibile',
    tempocottura: 60,
    difficolta: 'MEDIO',
    data: '24/06/2020',
    ora: '18:30',
    categoria: { id: 4, nome: 'Dolci' },
    ingredienti: [{ IDingrediente: 2, nome: 'Uova'},
      { IDingrediente: 10, nome: 'Mascarpone'},
      { IDingrediente: 11, nome: 'Cacao'},
      { IDingrediente: 12, nome: 'Caffe'},
      {IDingrediente: 13, nome: 'Savoiardi'}],
    immagini: [{ filepath: '', webviewpath: 'assets/images/dolce.jpg', base64: ''}],
    utente: {
      idutente: 0,
      username: 'lorsalvi',
      password: 'ciao',
      chiaverecupero: 'chiave1',
      nome: '',
      cognome: '',
      sesso: '',
      datanascita: ''
    }}
  ];*/

  constructor(private http: HttpClient) { }

  // Metodo che permette di recuperare tutte le ricette
  getAll(): Observable<Ricetta[]> {
    return this.http.get<Ricetta[]>(URL_API.allRicette);
    // return of(this.listaRicetta);
  }

  // Metodo che permette di recuperare una ricetta passando come parametro il codice identificativo
  get(id: number): Observable<Ricetta> {
    return this.http.get<Ricetta>(URL_API.singleRicetta(id));
    /*for (const element of this.listaRicetta) {
      if (element.idricetta.toString() === id.toString()) {
        return of(element);
      }
    }*/
  }

  // Metodo che permette di inserire una ricetta passata come parametro
  insert(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.post<Ricetta>(URL_API.insertRicetta, ricetta);
  }

  // Metodo che permette di aggiornare una ricetta passata come parametro
  // con il metodo put, dove il primo parametro è la Url che recupera la ricetta mediante il codice identificativo
  // mentre il secondo parametro è la ricetta aggiornata rispetto alla versione vecchia presente nel database
  update(ricetta: Ricetta): Observable<Ricetta> {
    return this.http.put<Ricetta>(URL_API.singleRicetta(ricetta.idricetta), ricetta);
  }

  // Metodo che permette di eliminare una ricetta passando come parametro il suo codice identificativo
  delete(id: number): Observable<Ricetta> {
    return this.http.delete<Ricetta>(URL_API.singleRicetta(id));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Ricetta} from '../models/ricetta.models';
import {URL_API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RicettaService {

  private listaRicetta: Ricetta[] = [];

  constructor(private http: HttpClient) { }

  // Metodo che permette di recuperare tutte le ricette
  getAll(): Observable<Ricetta[]> {
    // return this.http.get<Ricetta[]>(URL_API.allRicette);

    this.listaRicetta = [{
      IDricetta: 0,
      nomericetta: 'Antipasto misto',
      descrizione: '',
      preparazione: '',
      tempocottura: 10,
      difficolta: '',
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
      }}, {
      IDricetta: 1,
      nomericetta: 'Carbonara',
      descrizione: '',
      preparazione: '',
      tempocottura: 30,
      difficolta: '',
      data: '24/06/2020',
      ora: '18:30',
      categoria: { IDcategoria: 1, nome: 'Primi Piatti' },
      ingredienti: [{ IDingrediente: 2, nome: 'Uova'},
        { IDingrediente: 3, nome: 'Pasta'},
        { IDingrediente: 4, nome: 'Guanciale'},
        { IDingrediente: 5, nome: 'Pecorino'}],
      immagini: [{ filepath: '', webviewPath: 'assets/images/primo.jpg', base64: ''}],
      utente: {
        IDutente: 0,
        username: 'lorsalvi',
        password: 'ciao',
        chiaverecupero: 'chiave1',
        nome: '',
        cognome: '',
        sesso: '',
        datanascita: ''
      }}, {
      IDricetta: 2,
      nomericetta: 'Bistecca ai ferri',
      descrizione: '',
      preparazione: '',
      tempocottura: 20,
      difficolta: '',
      data: '24/06/2020',
      ora: '18:30',
      categoria: { IDcategoria: 2, nome: 'Secondi Piatti' },
      ingredienti: [{ IDingrediente: 6, nome: 'Carne'},
        { IDingrediente: 7, nome: 'Sale'},
        { IDingrediente: 8, nome: 'Pepe'}],
      immagini: [{ filepath: '', webviewPath: 'assets/images/secondo.jpeg', base64: ''}],
      utente: {
        IDutente: 0,
        username: 'lorsalvi',
        password: 'ciao',
        chiaverecupero: 'chiave1',
        nome: '',
        cognome: '',
        sesso: '',
        datanascita: ''
      }}, {
      IDricetta: 3,
      nomericetta: 'Bastoncini di zucchine',
      descrizione: '',
      preparazione: '',
      tempocottura: 15,
      difficolta: '',
      data: '24/06/2020',
      ora: '18:30',
      categoria: { IDcategoria: 3, nome: 'Contorni' },
      ingredienti: [{ IDingrediente: 9, nome: 'Zucchine'}],
      immagini: [{ filepath: '', webviewPath: 'assets/images/contorno.jpg', base64: ''}],
      utente: {
        IDutente: 0,
        username: 'lorsalvi',
        password: 'ciao',
        chiaverecupero: 'chiave1',
        nome: '',
        cognome: '',
        sesso: '',
        datanascita: ''
      }}, {
      IDricetta: 4,
      nomericetta: 'Tiramisu',
      descrizione: '',
      preparazione: '',
      tempocottura: 60,
      difficolta: '',
      data: '24/06/2020',
      ora: '18:30',
      categoria: { IDcategoria: 4, nome: 'Dolci' },
      ingredienti: [{ IDingrediente: 2, nome: 'Uova'},
        { IDingrediente: 10, nome: 'Mascarpone'},
        { IDingrediente: 11, nome: 'Cacao'},
        { IDingrediente: 12, nome: 'Caffe'},
        {IDingrediente: 13, nome: 'Savoiardi'}],
      immagini: [{ filepath: '', webviewPath: 'assets/images/dolce.jpg', base64: ''}],
      utente: {
        IDutente: 0,
        username: 'lorsalvi',
        password: 'ciao',
        chiaverecupero: 'chiave1',
        nome: '',
        cognome: '',
        sesso: '',
        datanascita: ''
      }}
    ];
    return of(this.listaRicetta);
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

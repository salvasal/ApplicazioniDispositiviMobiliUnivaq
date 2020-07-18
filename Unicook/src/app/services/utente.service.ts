import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from '../models/utente.models';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {AUTH_TOKEN, URL_API, UTENTE_STORAGE, X_AUTH} from '../constants';
import {map} from 'rxjs/operators';

export interface Account {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private authToken: string;
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private utente$: BehaviorSubject<Utente> = new BehaviorSubject<Utente>({} as Utente);

  constructor(private http: HttpClient,
              private storage: Storage) {
    this.storage.get(AUTH_TOKEN).then((token) => {
      console.log(token);
      this.authToken = token;
      if (token !== null && token !== undefined && token !== '') {
        this.loggedIn$.next(true);
      }
    });
    this.storage.get(UTENTE_STORAGE).then((utente) => {
      this.utente$.next(utente);
    });
  }

  login(account: Account): Observable<Utente> {
    return this.http.post<Utente>(URL_API.LOGIN, account, {observe: 'response'}).pipe(
        map((resp: HttpResponse<Utente>) => {
          const token = resp.headers.get(X_AUTH);
          this.storage.set(AUTH_TOKEN, token);
          this.authToken = token;
          // Utente memorizzato nello storage in modo tale che se si vuole cambiare il
          // profilo dell'utente stesso non si fa una chiamata REST.
          this.storage.set(UTENTE_STORAGE, resp.body);
          // update dell'observable dell'utente
          this.utente$.next(resp.body);
          this.loggedIn$.next(true);
          return resp.body;
        }));
  }

  logout() {
    this.authToken = null;
    this.loggedIn$.next(false);
    this.storage.remove(AUTH_TOKEN);
    this.storage.remove(UTENTE_STORAGE);
  }

  // Ritorna utente corrente
  getUtente(): BehaviorSubject<Utente> {
    return this.utente$;
  }

  // ritorna il token del utente corrente
  getAuthToken(): string {
    return this.authToken;
  }

  // Controlla se l'utente è loggato
  isLogged(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  // Metodo che verrà utilizzata nella logica del recupero delle credenziali
  getAll(): Observable<Utente[]> {
    return this.http.get<Utente[]>(URL_API.allUtenti);
  }

  // Metodo che verrà utilizzato per la creazione di un nuovo utente
  insert(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(URL_API.insertUtente, utente);
  }
}

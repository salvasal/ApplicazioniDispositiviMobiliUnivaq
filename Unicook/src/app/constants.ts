export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/unicookserver/api';

export const URL_API = {
    // Url di ricette
    // Url che recupera tutte le ricette
    allRicette: URL_BASE + '/ricette/',
    // Url che permette insert della nuova ricetta
    insertRicetta: URL_BASE + '/ricette/',
    // Url che permette il recupero  di una singola ricetta
    singleRicetta(id: number): string {
        return URL_BASE + '/ricette/' + id;
    },
    // Url della login
    LOGIN: URL_BASE + '/login',
    LOGOUT: URL_BASE + '/logout',
    allUtenti: URL_BASE + '/utenti/',
    insertUtente: URL_BASE + '/utenti/',
    allValutazioni: URL_BASE + '/valutazioni/',
    insertValutazione: URL_BASE + '/valutazioni/',
    singleValutazione(id: number): string {
        return URL_BASE + '/valutazioni/' + id;
    },
    allCategorie: URL_BASE + '/categorie/',
    insertCategoria: URL_BASE + '/categorie/',
    singleCategoria(id: number): string {
        return URL_BASE + '/categorie/' + id;
    }
};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';

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
    insertUtente: URL_BASE + '/utenti/'
};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';

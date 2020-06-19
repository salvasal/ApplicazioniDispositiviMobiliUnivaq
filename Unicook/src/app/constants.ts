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
    // Url di ingredienti
    // Url che recupera tutti gli ingredienti
    allIngredienti: URL_BASE + '/ingredienti/',
    // Url per insert del nuovo ingrediente
    insertIngrediente: URL_BASE + '/ingredienti/',
    // Url per recuperare singolo ingrediente
    singleIngrediente(id: number): string {
        return URL_BASE + '/ingredienti/' + id;
    },
    // Url di preferite
    // Url che recupera tutte le ricette preferite
    allPreferite: URL_BASE + '/preferite/',
    // Url per insert nuova ricetta preferita
    insertPreferita: URL_BASE + '/preferite/',
    // Url per recuperare una singola ricetta preferita
    singlePreferita(id: number): string {
        return URL_BASE + '/preferite/' + id;
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

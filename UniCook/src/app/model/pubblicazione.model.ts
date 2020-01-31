import {Utente} from './utente.model';
import {Ricetta} from './ricetta.model';

export class Pubblicazione {
    idPubblicazione: number;
    data: string;
    ora: string;
    utente: Utente;
    ricetta: Ricetta;
}

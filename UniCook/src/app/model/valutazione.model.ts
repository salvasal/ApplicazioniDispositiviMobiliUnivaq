import {Utente} from './utente.model';
import {Ricetta} from './ricetta.model';

export class Valutazione {
    idValutazione: number;
    data: string;
    voto: number;
    utente: Utente;
    ricetta: Ricetta;
}

export const VOTO = [1, 2, 3, 4, 5];

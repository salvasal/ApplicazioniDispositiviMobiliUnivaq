import {Utente} from './utente.model';
import {Ricetta} from './ricetta.module';

export class Valutazione {
    idvalutazione: string;
    data: Date;
    voto: number;
    utente: Utente;
    ricetta: Ricetta;
}

export const VOTO = [1, 2, 3, 4, 5];

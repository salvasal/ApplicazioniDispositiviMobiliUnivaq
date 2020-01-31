import {Utente} from './utente.model';
import {Ricetta} from './ricetta.model';

export class Preferito {
    idPreferito: number;
    data: string;
    utente: Utente;
    ricetta: Ricetta;
}

import {Utente} from './utente.model';
import {Ricetta} from './ricetta.model';

export class Preferito {
    idpreferito: string;
    data: Date;
    utente: Utente;
    ricetta: Ricetta;
}
